export async function getGalleryItems(){
    const items = await fetch('http://localhost:3000/data/gallery.json');
    return items.json();

}