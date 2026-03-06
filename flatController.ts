import Flat from "../models/Flat.js";

export const getFlats = async (req: any, res: any) => {
  try {
    const flats = await Flat.find();
    res.json(flats);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const getFlat = async (req: any, res: any) => {
  try {
    const flat = await Flat.findById(req.params.id);
    if (!flat) return res.status(404).json({ error: "Flat not found" });
    res.json(flat);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const createFlat = async (req: any, res: any) => {
  try {
    const flat = new Flat(req.body);
    await flat.save();
    res.status(201).json(flat);
  } catch (error) {
    res.status(400).json({ error: "Invalid data" });
  }
};

export const updateFlat = async (req: any, res: any) => {
  try {
    const flat = await Flat.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(flat);
  } catch (error) {
    res.status(400).json({ error: "Invalid data" });
  }
};

export const deleteFlat = async (req: any, res: any) => {
  try {
    await Flat.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
