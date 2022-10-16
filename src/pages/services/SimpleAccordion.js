import * as React from 'react';
import {Accordion, AccordionDetails, AccordionSummary} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";


export function SimpleAccordion(props) {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>
                        <h4>1. Выкупим земельный массив:</h4>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <ul style={{fontFamily: 'FiraLight', fontSize: '1.1rem', color: '#3c4b5a'}}>
                            <li>Размер земельного участка: от 5 га.</li>
                            <li>Удаленность от Москвы: от 10 км. До 130 км от МКАД.</li>
                            <li>Вид разрешенного использования: ИЖС/Дачное строительство/Малоэтажное строительство/ЛПХ/Садоводство и огородничество.</li>
                            <li>Условия сделки обсуждаются индивидуально.</li>
                        </ul>
                        {/*<h5>&bull; Размер земельного участка: от 5 га.</h5>*/}
                        {/*<h5>&bull; Удаленность от Москвы: от 10 км. До 130 км от МКАД.</h5>*/}
                        {/*<h5>&bull; Вид разрешенного использования: ИЖС/Дачное строительство/Малоэтажное строительство/ЛПХ/Садоводство и огородничество.</h5>*/}
                        {/*<h5>&bull; Условия сделки обсуждаются индивидуально.</h5>*/}
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>
                        <h4>2. Подготовим земельный массив к продаже:</h4>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <ul style={{fontFamily: 'FiraLight', fontSize: '1.1rem', color: '#3c4b5a'}}>
                            <li>Проектирование поселка, межевание, получение свидетельств на участки</li>
                            <li>Строительство дорожной сети поселка с твердым покрытием (бой, щебень, асфальная крошка)</li>
                            <li>Сопровождение договоров на электрификацию индивидуальных участков</li>
                            <li>Продажа земельных участков в розницу -  от 15% от суммы заключенных договоров</li>
                            <li>Сопровождение розничных сделок: документооборот, регистрация права собственности, вынос границ участка</li>
                        </ul>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>
                        <h4>3. Соинвестирование:</h4>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <ul style={{fontFamily: 'FiraLight', fontSize: '1.1rem', color: '#3c4b5a'}}>
                            <li>Берем займы под высокий процент с обеспечением землей в поселках</li>
                            <li>Реализуем проект с расчетом землей за выполненные услуги</li>
                            <li>Продаем доли участия в наших проектах</li>
                        </ul>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
