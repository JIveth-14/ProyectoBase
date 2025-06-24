const { createClient } = require("@supabase/supabase-js");

// Crear cliente Supabase usando variables de entorno
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
);

// Obtener todos los recordatorios
const getAllreminders = async (req, res) => {
  const { data, error } = await supabase.from("reminders").select("*");

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.status(200).json({ data });
};

// Crear un nuevo recordatorio
const createreminder = async (req, res) => {
  const { emoji, text, date } = req.body;
  const { data, error } = await supabase.from("reminders").insert([
    {  emoji, text, date }
  ]);
  if (error) {
    return res.status(500).json({ error: error.message });
  }
  res.status(201).json({ data });
};

// Actualizar un recordatorio
const updatereminder = async (req, res) => {
  const { id } = req.params;
  const {  emoji, text, date} = req.body;
  const { data, error } = await supabase
    .from("reminders")
    .update({ emoji, text, date})
    .eq("id", id);
  if (error) {
    return res.status(400).json({ error: error.message });
  }
  res.status(200).json({ data });
};

// Eliminar un recordatorio
const deletereminder = async (req, res) => {
  const { id } = req.params;
  const { error } = await supabase.from("reminders").delete().eq("id", id);

  if (error) {
    return res.status(400).json({ error: error.message });
  }
  res.status(204).send(); // No content
};

// Exportar funciones
module.exports = {
  getAllreminders,
  createreminder,
  updatereminder,
  deletereminder
};
