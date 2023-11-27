import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase
    .from('cabins')
    .select('*')

  if (error) {
    console.log(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

export async function createCabin(cabinData) {
  // https://mouhruwlzwwahduycnzf.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg

  // 1. Create a cabin
  const imageName = `${Math.random()}-${cabinData.image.name}`.replaceAll("/", "");

  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`

  const { data, error } = await supabase
    .from('cabins')
    .insert([{ ...cabinData, image: imagePath }])
    .select()

  if (error) {
    console.log(error);
    throw new Error("Cabins could not be created");
  }

  // 2. Upload image actually to the image bucket
  const { error: storageError } = await supabase
    .storage
    .from('cabin-images')
    .upload(imageName, cabinData.image);

  // 3. Delete the cabin if there is any error in uploading the image to the bucket
  if (storageError) {
    await supabase.from('cabins').delete().eq('id', data.id)
    console.error(storageError);
    throw new Error("Image could not be uploaded and Cabin was not be created.")
  }

  return data;
}

export async function deleteCabin(id) {

  const { data, error } = await supabase
    .from('cabins')
    .delete()
    .eq('id', id)

  if (error) {
    console.log(error);
    throw new Error("Cabins could not be deleted");
  }

  return data;
}