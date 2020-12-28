module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  snapshotSerializers: [
    'enzyme-to-json/serializer'
  ]
}
