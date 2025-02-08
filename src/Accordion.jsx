import { useState } from 'react'
import iconStar from './assets/images/icon-star.svg'
import plusIcon from './assets/images/icon-plus.svg'
import minusIcon from './assets/images/icon-minus.svg'

const Faqs = [
    {
        id: 1,
        quesion: 'What is Frontend Mentor, and how will it help me?',
        answer: 'Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It s suitable for all levels and ideal for portfolio building.'
    },
    {
        id: 2,
        quesion: 'Is Frontend Mentor free?',
        answer: 'Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.'
    },
    {
        id: 3,
        quesion: 'Can I use Frontend Mentor projects in my portfolio?',
        answer: 'Yes, you can use projects completed on Frontend Mentor in your portfolio. It s an excellent way to showcase your skills to potential employers!'
    },
    {
        id: 4,
        quesion: 'How can I get help if I m stuck on a Frontend Mentor challenge?',
        answer: 'The best place to get help is inside Frontend Mentor s Discord community. There s a help channel where you can ask questions and seek support from other community members.'
    },
]

export default function Accordion() {
    const [idSelected, setIdSelected] = useState(null)
    const handleSelect = (id) => {
       
        setIdSelected((prev) => (prev == id) ? null: id)
    }
    return (

        <div className='w-1/2 max-w-[550px] min-w-[400px] py-4 bg-white p-8 mt-8 rounded-lg '>
            <div className='flex m-6 '>
                <img src={iconStar} alt="icon-star" />
                <h2 className='ml-4 text-4xl font-WorkSansBold'>FAQs</h2>
            </div>

            {Faqs.map((faq) => (
                <div className={`${faq.id !== 4 ? 'border-b-2':''}`}>
                    <div className='flex justify-between items-center p-2 cursor-pointer' onClick={() => handleSelect(faq.id)}>
                        <li className='font-semibold list-none mt-4 p-2 mr-4 hover:text-purple-500' >{faq.quesion}</li>
                        <img src={idSelected == faq.id ? minusIcon : plusIcon} />
                    </div>
                    <div >
                        {idSelected == faq.id && <li className='list-none font-WorkSansItalic font-light text-purple-900 '>{faq.answer}</li>}

                    </div>

                </div>
            ))}

        </div>

    )
} 