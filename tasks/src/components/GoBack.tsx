import { MdArrowBackIos } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

export default function GoBack() {
  const navigate = useNavigate()
  return (
    <button onClick={()=>navigate('/')}>
        <MdArrowBackIos className='text-4xl'/>
    </button>
  )
}
