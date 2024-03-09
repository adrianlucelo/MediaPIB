import { Photo } from '../types/Photo';
import { storage } from '../libs/firebase';
import { ref, listAll, getDownloadURL, uploadBytes, deleteObject } from 'firebase/storage';
import { v4 as createId } from 'uuid';

export const getAll = async () => {
    let list: Photo[] = [];

    const imagesFolder = ref(storage, "images");
    const photoList = await listAll(imagesFolder);

    for (let i = 0; i < photoList.items.length; i++) {
        const photoItem = photoList.items[i];
        const photoUrl = await getDownloadURL(photoItem);

        list.push({
            name: photoItem.name,
            url: photoUrl
        });
    }

    return list;
}

export const insert = async (files: File[]) => {
    let results: (Photo | Error)[] = [];

    for (let i = 0; i < files.length; i++) {
        const file = files[i];

        if (['image/jpeg', 'image/jpg', 'image/png'].includes(file.type)) {
            const randomName = createId();
            const newFileRef = ref(storage, `images/${randomName}`);

            try {
                const uploadSnapshot = await uploadBytes(newFileRef, file);
                const photoUrl = await getDownloadURL(uploadSnapshot.ref);
                results.push({ name: uploadSnapshot.ref.name, url: photoUrl });
            } catch (error) {
                if (error instanceof Error) {
                    results.push(new Error(`Erro ao enviar arquivo ${file.name}: ${error.message}`));
                } else {
                    results.push(new Error(`Erro ao enviar arquivo ${file.name}`));
                }
            }
        } else {
            results.push(new Error(`Tipo de arquivo não permitido: ${file.name}`));
        }
    }

    return results;
}

export const deletePhoto = async (name: string) => {
    const photoRef = ref(storage, `images/${name}`);
    await deleteObject(photoRef);
}
