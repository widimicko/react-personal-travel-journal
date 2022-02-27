import React from 'react'

function Content(props) {
  return (
    <>
      <div className='flex gap-4'>
        <img src={props.item.imageUrl} alt="" className='w-1/4 rounded-xl' />
        <div>
          <div className="flex gap-7">
            <p className='uppercase'>
              <span className="text-red-800 mr-3">
                <i className="bi bi-pin-map-fill"></i>
              </span>
              {props.item.location}
            </p>
            <a href="https://google.com" className='underline'>View on Google Maps</a>
          </div>
          <p className="font-bold text-xl mb-2">{props.item.title}</p>
          <p className="font-bold">{props.item.startDate} - {props.item.endDate}</p>
          <p className='text-justify'>{props.item.description}</p>
        </div>
      </div><br /><hr /><br />
    </>
  );
}

export default Content;
