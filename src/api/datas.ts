export const transacList: {
  id: string;
  accountName: string;
  accountNumber: string;
  dateTime: string;
  bankName: string;
  amount: string;
  transacType: 'send' | 'request';
}[] = [
  {
    id: '001',
    accountName: 'Oyebode Yusuf',
    accountNumber: '0170927254',
    dateTime: '2020-05-02 13:00',
    bankName: 'Fidelity Bank',
    transacType: 'send',
    amount: '1000',
  },
  {
    id: '002',
    accountName: 'Oyebode Abdulwahab',
    accountNumber: '0170927254',
    dateTime: '2021-05-02 13:00',
    bankName: 'First Bank',
    transacType: 'send',
    amount: '55000',
  },
  {
    id: '003',
    accountName: 'Oyebode Mashood',
    accountNumber: '0170927254',
    dateTime: '2021-04-18 03:30',
    bankName: 'UBA',
    transacType: 'send',
    amount: '1900',
  },
  {
    id: '004',
    accountName: 'Oyebode Oloye',
    accountNumber: '4170647254',
    dateTime: '2021-01-01 00:00',
    bankName: 'GT Bank',
    transacType: 'request',
    amount: '21000',
  },
  {
    id: '005',
    accountName: 'Oyebode Abdullateef',
    accountNumber: '6320927254',
    dateTime: '2021-01-07 00:30',
    bankName: 'Unity Bank',
    transacType: 'request',
    amount: '23000',
  },
];
