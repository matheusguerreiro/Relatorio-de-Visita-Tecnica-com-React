// sass
import './cards.sass'


const Cards = ({note}) => {
  
  return (
    <div className='cards'>
      <h3><i className="fa-solid fa-pencil"></i>Anotação</h3>
        {note.attachments.images.length > 0 ? (
          <div className='imgsCards'>
            {note.attachments.images.map((image) => (
              <img src={image.thumb_url} alt='' key={image.id} />
            ))}
          </div>
        ) : ''}
      <p>{note.description}</p>
    </div>
  )
}

export default Cards