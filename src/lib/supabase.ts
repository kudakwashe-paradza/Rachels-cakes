import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

if (!supabaseUrl || !supabaseAnonKey) {

  console.error(
    'Missing Supabase env vars. Create a .env file (see .env.example) with ' +
      'VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY, and set the same in your ' +
      'Vercel project settings.'
  );
}

export const supabase = createClient(supabaseUrl ?? '', supabaseAnonKey ?? '');

export interface CakeOrderInput {
  name: string;
  email: string;
  phone?: string;
  event_date?: string;
  occasion?: string;
  message: string;
}

export interface ContactMessageInput {
  name: string;
  email: string;
  reason?: string;
  message: string;
}

export async function submitCakeOrder(input: CakeOrderInput) {
  const { error } = await supabase.from('cake_orders').insert(input);
  if (error) throw error;
}

export async function submitContactMessage(input: ContactMessageInput) {
  const { error } = await supabase.from('contact_messages').insert(input);
  if (error) throw error;
}


export type CakeCategory = 'Wedding' | 'Birthday' | 'Cupcakes' | 'Macarons';

export interface Cake {
  id: string;
  title: string | null;
  category: CakeCategory;
  image_path: string | null;
  image_url: string;
  sort_order: number;
  created_at: string;
}

export async function fetchCakes(): Promise<Cake[]> {
  const { data, error } = await supabase
    .from('cakes')
    .select('*')
    .order('sort_order', { ascending: true })
    .order('created_at', { ascending: false });
  if (error) throw error;
  return data as Cake[];
}

export async function uploadCake(file: File, category: CakeCategory, title?: string) {
  const ext = file.name.split('.').pop() ?? 'jpg';
  const path = `${crypto.randomUUID()}.${ext}`;

  const { error: uploadError } = await supabase.storage.from('cake-images').upload(path, file);
  if (uploadError) throw uploadError;

  const { data: publicUrlData } = supabase.storage.from('cake-images').getPublicUrl(path);

  const { error: insertError } = await supabase.from('cakes').insert({
    title: title || null,
    category,
    image_path: path,
    image_url: publicUrlData.publicUrl,
  });
  if (insertError) throw insertError;
}

export async function deleteCake(cake: Cake) {
  if (cake.image_path) {
    const { error: storageError } = await supabase.storage.from('cake-images').remove([cake.image_path]);
    if (storageError) throw storageError;
  }
  const { error } = await supabase.from('cakes').delete().eq('id', cake.id);
  if (error) throw error;
}



export async function signInAdmin(email: string, password: string) {
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw error;
}

export async function signOutAdmin() {
  await supabase.auth.signOut();
}

export async function getAdminSession() {
  const { data } = await supabase.auth.getSession();
  return data.session;
}
