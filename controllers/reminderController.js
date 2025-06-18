const { createClient } = require("@supabase/supabase-js");
const supabase = require("../supabaseClient");


const supabaseAnonClient= createClient
(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY
);

exports.getAllReminders = async (req , res) => {
    const {data, error} = await supabaseAnonClient.from("reminders").select("*");
     if (error) return res.status(500).json({
        error: error.message
    });
    res.json({data});
    return res;
};

exports.createReminder = async ( req , res) => {
    const { title, description, due_date } = req.body;

    const {data, error} = await supabaseAnonClient.from("reminders").insert([
{ title, description, due_date }
     ]);

if (error) return res.status(500).json({
        error: error.message
    });
     res.status(201).json(data);
     return res;
}

// actualizar un recordatorio
exports.updateReminder = async (req, res) => {
  const { id } = req.params;
  const { title, description, due_date } = req.body;
  const { data, error } = await supabaseAnonClient
    .from("reminders")
    .update({ title, description, due_date })
    .eq("id", id);
  if (error) return res.status(400).json({ error: error.message });
  res.json(data[0]);
};

// eliminar un recordatorio
exports.deleteReminder = async (req, res) => {
  const { id } = req.params;
  const { error } = await supabaseAnonClient.from("reminders").delete().eq("id", id);
  if (error) return res.status(400).json({ error: error.message });
  res.status(204).send();
};