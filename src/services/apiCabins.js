import supabase from "./supabase";

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

  const { data, error } = await supabase
    .from('cabins')
    .insert([cabinData])
    .select()

  if (error) {
    console.log(error);
    throw new Error("Cabins could not be created");
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