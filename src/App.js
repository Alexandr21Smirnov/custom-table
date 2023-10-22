import './App.css';

const body = [
  {
    id: '01',
    items: [
      {
        title: 'Purchase',
        date: '06/17/2020 at 7:13 PM PDT',
        price: '$120',
      },
      {
        title: 'autouser2121@gmail.com',
        emailSender: 'Advocate',
      },
      {
        title: 'fr582726@gmail.com',
        emailSender: 'Friend',
      },
      {
        title: 'Pending',
        statusCheck: 'Passed fraud checks',
        isFraud: false,
      },
    ],
  },
  {
    id: '02',
    items: [
      {
        title: 'Purchase',
        date: '01/19/2020 at 8:13 PM PDT',
        price: '$100',
      },
      {
        title: 'autouser242342@gmail.com',
        emailSender: 'Advocate',
      },
      {
        title: 'fr582726@gmail.com',
        emailSender: 'Friend',
      },
      {
        title: 'Flagged',
        statusCheck: 'Marked as fraud',
        isFraud: true,
      },
    ],
  },
  {
    id: '03',
    items: [
      {
        title: 'Purchase',
        date: '11/21/2020 at 2:13 PM PDT',
        price: '$120',
      },
      {
        title: 'autouser21271@gmail.com',
        emailSender: 'Advocate',
      },
      {
        title: 'fr582726@gmail.com',
        emailSender: 'Friend',
      },
      {
        title: 'Approved',
        statusCheck: 'Passed fraud checks',
        isFraud: false,
      },
    ],
  },
  {
    id: '04',
    items: [
      {
        title: 'Purchase',
        date: '05/10/2020 at 3:13 PM PDT',
        price: '$28',
      },
      {
        title: 'autouser2823286121@gmail.com',
        emailSender: 'Advocate',
      },
      {
        title: 'fr582726@gmail.com',
        emailSender: 'Friend',
      },
      {
        title: 'Blocked',
        statusCheck: 'Marked as fraud',
        isFraud: true,
      },
    ],
  },
  {
    id: '05',
    items: [
      {
        title: 'Purchase',
        date: '05/31/2020 at 9:13 PM PDT',
        price: '$100',
      },
      {
        title: 'autouser2353443121@gmail.com',
        emailSender: 'Advocate',
      },
      {
        title: 'fr5827223232332426@gmail.com',
        emailSender: 'Friend',
      },
      {
        title: 'Voided',
        statusCheck: 'Marked as fraud',
        isFraud: true,
      },
    ],
  },
];

const heading = ['Referral event', 'Advocate', 'Friend', 'Referral status'];

function App() {
  return (
    <div className='wrapper'>
      <div className='container'>
        <h2 className='title'>Referrals - 345</h2>
        <table>
          <thead>
            <tr className='border-bottom'>
              {heading.map((head, headID) => (
                <th key={headID}>{head}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {body.map(({ items, id }) => (
              <tr key={id} className='border-bottom'>
                {items.map((item, idx) => (
                  <td key={idx}>
                    <div className='flex'>
                      {item.title && (
                        <span
                          className={
                            item.title.length > 25
                              ? 'ellipsis item-title m-bold'
                              : 'm-bold'
                          }
                        >
                          {item.title}
                        </span>
                      )}
                      {item.date && <span className='grey'>{item.date}</span>}
                      {item.emailSender && <span>{item.emailSender}</span>}
                      {item.statusCheck && (
                        <span className={item.isFraud ? 'red' : 'grey'}>
                          {item.statusCheck}
                        </span>
                      )}
                      {item.price && <span className='bold'>{item.price}</span>}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
