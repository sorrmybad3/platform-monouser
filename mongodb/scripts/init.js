try {
  rs.status();
  print('Already initiated');
}
catch {
  rs.initiate({
    _id: 'rs0',
    members: [
      { _id: 0, host: 'localhost:27017' },
    ]
  })
  print('Successfully initiated');
}