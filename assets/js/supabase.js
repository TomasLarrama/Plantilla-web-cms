import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

// El navegador lee las claves de forma segura
const supabaseUrl = window.env?.URL || ''
const supabaseKey = window.env?.KEY || ''

//console logs
if (!supabaseUrl || !supabaseKey) {
    console.error("❌ Error: No se detectaron las credenciales de Supabase en window.env");
}

export const supabase = createClient(supabaseUrl, supabaseKey)