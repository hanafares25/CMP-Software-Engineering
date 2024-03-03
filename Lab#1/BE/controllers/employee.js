const employee = [
  { id: '1', name: 'Mohamed Sayed' },
];

exports.getEmployees = async (req, res, next) => {
  res.status(200).json({ data: employee });
};

// TODO
exports.deleteEmployee = async (req, res, next) => {
  const { id } = req.params;
  const index = employee.findIndex((emp) => emp.id === id);
  employee.splice(index, 1);
  res.status(200).json({ data: employee });
};

// TODO
exports.createEmployee = async (req, res, next) => {
  const { id, name } = req.body;
  const isDuplicated = employee.some(empl => empl.id === id);
  if (isDuplicated) {
    return res.status(400).json({ error: 'Existing Employee with same ID' });
  }
  employee.push({ id, name });
  res.status(201).json({ data: employee });
};
