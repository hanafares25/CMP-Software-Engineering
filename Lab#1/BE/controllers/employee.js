const employee = [
  { id: '1', name: 'Mohamed Sayed' },
];

exports.getEmployees = async (req, res, next) => {
  res.status(200).json({ data: employee });
};

// TODO
exports.deleteEmployee = async (req, res, next) => {
  
};

// TODO
exports.createEmployee = async (req, res, next) => {
  const { id, name } = req.body;
  employee.push({ id, name });
  res.status(201).json({ data: employee });
};
