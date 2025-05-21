import { supabase } from "../supabase/client";

export const insertUserToDB = async () => {
 const { data: { user } } = await supabase.auth.getUser();

if (!user) {
  console.error("User not logged in");
  return;
}

const { error } = await supabase.from("user").upsert([
  {
    id: user.id,                // 🔑 must match auth.uid()
    email: user.email,
    name: user.user_metadata?.name ?? "",
  }
]);

if (error) {
  console.error("Failed to insert user into DB:", error.message);
}
else{
    console.log("User inserted into DB successfully");

}
};
