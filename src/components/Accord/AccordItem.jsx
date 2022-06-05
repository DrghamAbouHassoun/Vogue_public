import React, {useState} from 'react'

const AccordItem = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="accord-item">
            <div className="accord-header">
                <div>
                    <h1>Accordion item 1</h1>
                </div>
                <div>
                    <button type="button" onClick={() => setOpen(!open)}>
                    <i className="far fa-plus-square"></i>
                    </button>
                </div>
            </div>
            <div className={`accord-body ${open ? "active" : ''}`}>
                <h1>Content header</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias laudantium, saepe velit accusamus veniam a tempora ipsa consequuntur ea sapiente. Animi pariatur suscipit rem quis nulla aspernatur velit harum eos?</p>
                <h1>Content header</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias laudantium, saepe velit accusamus veniam a tempora ipsa consequuntur ea sapiente. Animi pariatur suscipit rem quis nulla aspernatur velit harum eos?</p>
                <h1>Content header</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias laudantium, saepe velit accusamus veniam a tempora ipsa consequuntur ea sapiente. Animi pariatur suscipit rem quis nulla aspernatur velit harum eos?</p>
                <h1>Content header</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias laudantium, saepe velit accusamus veniam a tempora ipsa consequuntur ea sapiente. Animi pariatur suscipit rem quis nulla aspernatur velit harum eos?</p>
                <h1>Content header</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias laudantium, saepe velit accusamus veniam a tempora ipsa consequuntur ea sapiente. Animi pariatur suscipit rem quis nulla aspernatur velit harum eos?</p>
                <h1>Content header</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias laudantium, saepe velit accusamus veniam a tempora ipsa consequuntur ea sapiente. Animi pariatur suscipit rem quis nulla aspernatur velit harum eos?</p>
                <h1>Content header</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias laudantium, saepe velit accusamus veniam a tempora ipsa consequuntur ea sapiente. Animi pariatur suscipit rem quis nulla aspernatur velit harum eos?</p>
                <h1>Content header</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias laudantium, saepe velit accusamus veniam a tempora ipsa consequuntur ea sapiente. Animi pariatur suscipit rem quis nulla aspernatur velit harum eos?</p>
                <h1>Content header</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias laudantium, saepe velit accusamus veniam a tempora ipsa consequuntur ea sapiente. Animi pariatur suscipit rem quis nulla aspernatur velit harum eos?</p>
            </div>
        </div>
    )
}

export default AccordItem