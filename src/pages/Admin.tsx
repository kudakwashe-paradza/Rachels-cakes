import { FormEvent, useEffect, useState } from 'react';
import {
  type Cake,
  type CakeCategory,
  deleteCake,
  fetchCakes,
  getAdminSession,
  signInAdmin,
  signOutAdmin,
  uploadCake,
} from '@/lib/supabase';
import { LogOut, Trash2, UploadCloud, AlertCircle } from 'lucide-react';

const categories: CakeCategory[] = ['Wedding', 'Birthday', 'Cupcakes', 'Macarons'];

export default function Admin() {
  const [checkingSession, setCheckingSession] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    getAdminSession()
      .then((session) => setLoggedIn(!!session))
      .finally(() => setCheckingSession(false));
  }, []);

  if (checkingSession) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="text-cocoa-500">Checking session…</p>
      </div>
    );
  }

  return loggedIn ? (
    <Gallery onSignOut={() => setLoggedIn(false)} />
  ) : (
    <Login onSignedIn={() => setLoggedIn(true)} />
  );
}

function Login({ onSignedIn }: { onSignedIn: () => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      await signInAdmin(email, password);
      onSignedIn();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not sign in.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 pt-24">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white rounded-3xl p-8 shadow-sm border border-cream-200 space-y-5"
      >
        <div>
          <h1 className="font-display text-3xl text-cocoa-900">Rachel's Admin</h1>
          <p className="text-sm text-cocoa-500 mt-1">Sign in to manage the gallery.</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-cocoa-700 mb-1.5">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full rounded-xl border border-cream-200 bg-cream-50 px-4 py-2.5 text-cocoa-800 focus:outline-none focus:border-blush-400 focus:ring-2 focus:ring-blush-200"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-cocoa-700 mb-1.5">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full rounded-xl border border-cream-200 bg-cream-50 px-4 py-2.5 text-cocoa-800 focus:outline-none focus:border-blush-400 focus:ring-2 focus:ring-blush-200"
          />
        </div>
        {error && (
          <div className="flex items-center gap-2 text-sm text-red-700 bg-red-50 rounded-xl p-3">
            <AlertCircle className="w-4 h-4 shrink-0" />
            {error}
          </div>
        )}
        <button type="submit" disabled={submitting} className="btn-primary w-full justify-center disabled:opacity-60">
          {submitting ? 'Signing in…' : 'Sign in'}
        </button>
      </form>
    </div>
  );
}

function Gallery({ onSignOut }: { onSignOut: () => void }) {
  const [cakes, setCakes] = useState<Cake[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [file, setFile] = useState<File | null>(null);
  const [category, setCategory] = useState<CakeCategory>('Birthday');
  const [title, setTitle] = useState('');
  const [uploading, setUploading] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const load = () => {
    setLoading(true);
    fetchCakes()
      .then(setCakes)
      .catch((err) => setError(err instanceof Error ? err.message : 'Could not load the gallery.'))
      .finally(() => setLoading(false));
  };

  useEffect(load, []);

  const handleUpload = async (e: FormEvent) => {
    e.preventDefault();
    if (!file) return;
    setUploading(true);
    setError(null);
    try {
      await uploadCake(file, category, title || undefined);
      setFile(null);
      setTitle('');
      (document.getElementById('cake-file-input') as HTMLInputElement | null)?.value &&
        ((document.getElementById('cake-file-input') as HTMLInputElement).value = '');
      load();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Upload failed.');
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (cake: Cake) => {
    if (!confirm('Remove this photo from the gallery?')) return;
    setDeletingId(cake.id);
    setError(null);
    try {
      await deleteCake(cake);
      setCakes((prev) => prev.filter((c) => c.id !== cake.id));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not delete this photo.');
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="pt-28 pb-24">
      <div className="container-page space-y-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-display text-4xl text-cocoa-900">Gallery admin</h1>
            <p className="text-cocoa-500 mt-1 text-sm">Add or remove photos shown on the Creations page.</p>
          </div>
          <button
            onClick={async () => {
              await signOutAdmin();
              onSignOut();
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cream-200 text-cocoa-600 hover:bg-cream-100 text-sm"
          >
            <LogOut className="w-4 h-4" />
            Sign out
          </button>
        </div>

        {error && (
          <div className="flex items-center gap-2 text-sm text-red-700 bg-red-50 rounded-xl p-4">
            <AlertCircle className="w-4 h-4 shrink-0" />
            {error}
          </div>
        )}

        {/* Upload form */}
        <form
          onSubmit={handleUpload}
          className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-cream-200 grid gap-5 md:grid-cols-[1fr_auto] md:items-end"
        >
          <div className="grid gap-5 sm:grid-cols-3">
            <div className="sm:col-span-1">
              <label className="block text-sm font-medium text-cocoa-700 mb-1.5">Photo</label>
              <input
                id="cake-file-input"
                type="file"
                accept="image/*"
                required
                onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                className="w-full text-sm text-cocoa-700 file:mr-3 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-blush-100 file:text-blush-700 file:text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-cocoa-700 mb-1.5">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as CakeCategory)}
                className="w-full rounded-xl border border-cream-200 bg-cream-50 px-3 py-2.5 text-cocoa-800"
              >
                {categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-cocoa-700 mb-1.5">Title (optional)</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Rustic wedding tier"
                className="w-full rounded-xl border border-cream-200 bg-cream-50 px-3 py-2.5 text-cocoa-800"
              />
            </div>
          </div>
          <button type="submit" disabled={!file || uploading} className="btn-primary justify-center disabled:opacity-60">
            <UploadCloud className="w-4 h-4" />
            {uploading ? 'Uploading…' : 'Add to gallery'}
          </button>
        </form>

        {/* Existing photos */}
        {loading ? (
          <p className="text-cocoa-500">Loading gallery…</p>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {cakes.map((cake) => (
              <div key={cake.id} className="bg-white rounded-2xl overflow-hidden border border-cream-200 shadow-sm">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={cake.image_url} alt={cake.title ?? cake.category} className="w-full h-full object-cover" />
                </div>
                <div className="p-3 flex items-center justify-between">
                  <span className="text-xs font-medium text-cocoa-600">{cake.category}</span>
                  <button
                    onClick={() => handleDelete(cake)}
                    disabled={deletingId === cake.id}
                    className="p-1.5 rounded-full text-red-600 hover:bg-red-50 disabled:opacity-50"
                    aria-label="Remove photo"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
