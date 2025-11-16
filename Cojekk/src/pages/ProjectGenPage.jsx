import {Navbar} from '../components/Navbar'
import {GeneratorChatbot} from '../components/GeneratorChatbot'
import './ProjectGenPage.css'

export function ProjectGenPage() {
    return (
        <div>
            {/* navbar */}
            <Navbar/>

        <div className="intro-container flex px-15 justify-between py-17 relative">
            <div className="intro">
                <h1 className="intro-heading font-['Rubik-bubbles']" > Find projects ideas to boost your learning</h1>
                <p className="font-['Raleway-regular'] text-2xl">Sip your coffee while we generate clear, interesting project concepts for you.</p>
            </div>
<img className='absolute right-0 top-[50%] -translate-y-1/2 transform size-98 opacity-[0.1]' src="/images/mug.png" alt="mug-image" />
        </div>

        {/* chat bot component */}
        <GeneratorChatbot/>

        

        </div>
    )
}