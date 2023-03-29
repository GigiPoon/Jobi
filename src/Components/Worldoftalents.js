import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect, useState } from "react";



function Worldoftalents() {

    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    }

    return (
        <div className="Worldoftalents wrapper">
            <img src={require('../Assets/left.png')} />
            <div className='flextalent'>
                <p>Why choose us?</p>
                <h2>World of talent at your fingertips</h2>

                <Accordion className='accordion' expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary className='paddingfix'
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography className='h3dup' sx={{ width: '33%', flexShrink: 0 }}>
                            Seamless Search
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails className='paddingfix paddbottom'>
                        <Typography className='accordionlorem'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente laborum cupiditate possimus labore, hic temporibus velit dicta earum suscipit commodi eum enim atque at? Et perspiciatis dolore iure voluptatem.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='accordion' expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary className='paddingfix'
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                    >
                        <Typography className='h3dup' sx={{ width: '33%', flexShrink: 0 }}>Hire top talents</Typography>
                    </AccordionSummary>
                    <AccordionDetails className='paddingfix paddbottom'>
                        <Typography className='accordionlorem'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente laborum cupiditate possimus labore, hic temporibus velit dicta earum suscipit commodi eum enim atque at? Et perspiciatis dolore iure voluptatem.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='accordion' expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary className='paddingfix'
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                    >
                        <Typography className='h3dup' sx={{ width: '33%', flexShrink: 0 }}>
                            Protected payments, every time
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails className='paddingfix paddbottom'>
                        <Typography className='accordionlorem'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente laborum cupiditate possimus labore, hic temporibus velit dicta earum suscipit commodi eum enim atque at? Et perspiciatis dolore iure voluptatem.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <button>Learn More</button>
            </div>
        </div>
    );
}

export default Worldoftalents;