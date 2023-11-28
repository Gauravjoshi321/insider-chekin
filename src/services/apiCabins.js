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

export async function createEditCabin(cabinData, id) {
  const hasImagePath = cabinData.image?.startsWith?.(supabaseUrl);

  const num = Math.random();
  const imageName = `${Math.random()}-${hasImagePath ? `${"imageEdited"}--${num}` : cabinData.image.name}`.replaceAll("/", "");
  const imagePath = hasImagePath
    ? cabinData.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // 1. Create/Edit a cabin
  let query = supabase.from("cabins");

  // A. Create
  if (!id) query = query.insert([{ ...cabinData, image: imagePath }]);

  // B. Edit
  if (id) query = query.update({ ...cabinData, image: imagePath }).eq("id", id);

  const { data, error } = await query.select();

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be created");
  }

  // 2. Upload image actually to the image bucket
  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, cabinData.image);


  // 3. Delete the cabin if there is any error in uploading the image to the bucket
  if (storageError) {
    await supabase.from('cabins').delete().eq('id', data[0].id)
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