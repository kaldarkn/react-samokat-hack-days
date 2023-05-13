import './ReserveMeetingRoom.css';

const ReserveMeetingRoom = () => {
  return (
    <div className='card'>
      <div className='card-header'>
        <h3>Нужна помощь</h3>
        <button className='card-link'>Перейти</button>
      </div>
      <div className='card-content'>sd</div>
      <div className='card-footer'>
        <button className='footer-action'>Забронировать</button>
        <div>Свободно: <span className='footer-digits'>3 / 12</span> </div>
      </div>
    </div>
  );
};

export { ReserveMeetingRoom };
