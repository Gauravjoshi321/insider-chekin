import supabase, { supabaseUrl } from "./supabase";

// SignUp
export async function signUp({ fullName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,
        avatar: "",
      }
    }
  })

  if (error) throw new Error(error.message);

  return data;
}

// Login
export async function login({ email, password }) {
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })

  if (error) throw new Error(error.message);

  return data;
}

// Verifying current user
export async function getCurrentUser() {

  // this is actually ensuring that session has been created for this client or not...whole done the Supabase setup for the current user
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  // this will get the current client(user) details using the supabse who has created the session by doing login.
  // This exclusivity of the user is all done by the supabse library we have here in our code.
  // This function getUser() below will actually return only a user who has logged in with its respective supabse client.
  const { data, error } = await supabase.auth.getUser();

  console.log("session:", session);
  console.log("user:", data);

  if (error) throw new Error(error.message);

  return data.user;
}

// Logout
export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

// UpdateCurrentUser
export async function UpdateCurrentUser({ password, fullName, avatar }) {
  // 1. Update Password OR FullName
  let updatingData;
  if (password) updatingData = { password };
  if (fullName) updatingData = { data: { fullName } };

  const { data, error } = await supabase.auth.updateUser(updatingData);

  if (error) throw new Error(error.message);
  if (!avatar) return data;

  // 2. Upload the avatar image
  const fileName = `avatar-${data.user.id}-${Math.random()}`;

  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(fileName, avatar);

  if (storageError) throw new Error(storageError.message);

  // 3. Update avatar in the user
  const { data: updateUser, error: error2 } = supabase.auth.updateUser({
    data: {
      avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`
    }
  })

  if (error2) throw new Error(error2.message);
  return updateUser;
}

