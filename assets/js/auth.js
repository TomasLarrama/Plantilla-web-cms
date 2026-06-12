import { supabase } from './supabase.js'

// Función para iniciar sesión con Email y Contraseña
export async function loginUser(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    })
    if (error) throw error
    return data
}

// Función para cerrar sesión
export async function logoutUser() {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
    window.location.href = 'login.html'
}

// Función para proteger páginas (si no está logueado, rebota al login)
export async function checkAuth(requireAuth = true) {
    const { data: { session } } = await supabase.auth.getSession()
    
    if (requireAuth && !session) {
        // Intenta entrar a una página privada sin estar logueado
        window.location.href = 'login.html'
    } else if (!requireAuth && session) {
        // Está logueado e intenta entrar al login, lo mandamos al admin
        window.location.href = 'admin.html'
    }
    return session?.user || null
}