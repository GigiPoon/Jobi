import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


    
    function QA() {

        const [expanded, setExpanded] = React.useState(false);

        const handleChange = (panel) => (event, isExpanded) => {
            setExpanded(isExpanded ? panel : false);
        };

    return (
        <div className="QA">
            <div className="wrapper">
                <h2>Questions & Answers</h2>
                <Accordion className='accordion' expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography className='h3dup' sx={{ width: '33%', flexShrink: 0 }}>
                            How does the free trial work?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className='accordionlorem'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente laborum cupiditate possimus labore, hic temporibus velit dicta earum suscipit commodi eum enim atque at? Et perspiciatis dolore iure voluptatem.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='accordion' expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                    >
                        <Typography className='h3dup' sx={{ width: '33%', flexShrink: 0 }}>How do you find different criteria in your process?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className='accordionlorem'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente laborum cupiditate possimus labore, hic temporibus velit dicta earum suscipit commodi eum enim atque at? Et perspiciatis dolore iure voluptatem.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='accordion' expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                    >
                        <Typography className='h3dup' sx={{ width: '33%', flexShrink: 0 }}>
                            What do you look for in a founding team?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className='accordionlorem'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente laborum cupiditate possimus labore, hic temporibus velit dicta earum suscipit commodi eum enim atque at? Et perspiciatis dolore iure voluptatem.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='accordion' expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                    >
                        <Typography className='h3dup' sx={{ width: '33%', flexShrink: 0 }}>Do you recommend Pay as you go or Pre pay?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className='accordionlorem'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente laborum cupiditate possimus labore, hic temporibus velit dicta earum suscipit commodi eum enim atque at? Et perspiciatis dolore iure voluptatem.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='accordion' expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4bh-content"
                        id="panel4bh-header"
                    >
                        <Typography className='h3dup' sx={{ width: '33%', flexShrink: 0 }}>What do I get for $0 with my plan?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography className='accordionlorem'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente laborum cupiditate possimus labore, hic temporibus velit dicta earum suscipit commodi eum enim atque at? Et perspiciatis dolore iure voluptatem.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <p className='qastylep'>Don’t find the answer? We can help. <a href="https://gigipoon.tech">Click here</a></p>
            </div>
        </div>
    );
}
export default QA;