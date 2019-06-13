const TRANSACTION_TYPE = 'ARC01';
const NOTE_BYTE_LIMIT = 1000;

const BASIC_OPERATION_NAMES = {
  CREATE: 'CREATE',
  TRANSFER: 'TRANSFER',
};

const SECURITY_OPERATION_NAMES = {
  CREATE: 'CREATE',
  REQUEST_TRANSFER: 'REQUEST_TRANSFER',
  APPROVE_TRANSFER: 'APPROVE_TRANSFER',
  DENY_TRANSFER: 'DENY_TRANSFER',
  UPDATE_COMPLIANCE: 'UPDATE_COMPLIANCE',
  ADD_DOCUMENT: 'ADD_DOCUMENT',
  UPDATE_DISTRIBUTION: 'UPDATE_DISTRIBUTION',
};

module.exports = {
  TRANSACTION_TYPE,
  BASIC_OPERATION_NAMES,
  SECURITY_OPERATION_NAMES,
  NOTE_BYTE_LIMIT,
};
