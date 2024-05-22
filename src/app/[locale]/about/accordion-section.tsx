'use client'

import { useState } from 'react'

import Accordion from '../components/accordion'

import { useTranslations } from 'next-intl'

const AccordionSection = () => {
  const [expanded, setExpanded] = useState(-1)
  const t = useTranslations()

  const accordionItems = [
    {
      description: (
        <>
          <p>{t('about_us.description_p4_1')}</p>
          <h6 className="text-sm">{t('about_us.description_p5_1')}</h6>
          <p>{t('about_us.description_p5_2')}</p>
          <h6 className="text-sm">{t('about_us.description_p6_1')}</h6>
          <p>{t('about_us.description_p6_2')}</p>
          <h6 className="text-sm">{t('about_us.description_p7_1')}</h6>
          <p>{t('about_us.description_p7_2')}</p>
          <h6 className="text-sm">{t('about_us.description_p8_1')}</h6>
          <p>{t('about_us.description_p8_2')}</p>
        </>
      ),
      title: t('about_us.description_p4_0')
    },
    {
      description: (
        <>
          <p>{t('about_us.principals_p1_1')}</p>
          <h6 className="text-sm">{t('about_us.principals_p2_1')}</h6>
          <p>{t('about_us.principals_p2_2')}</p>
          <h6 className="text-sm">{t('about_us.principals_p3_1')}</h6>
          <p>{t('about_us.principals_p3_2')}</p>
          <h6 className="text-sm">{t('about_us.principals_p4_1')}</h6>
          <p>{t('about_us.principals_p4_2')}</p>
          <h6 className="text-sm">{t('about_us.principals_p5_1')}</h6>
          <p>{t('about_us.principals_p5_2')}</p>
        </>
      ),
      title: t('about_us.principals_p1_0')
    },
    {
      description: [
        t('about_us.principals_p6_2'),
        t('about_us.principals_p6_3'),
        t('about_us.principals_p6_4'),
        t('about_us.principals_p6_5'),
        t('about_us.principals_p6_6'),
        t('about_us.principals_p6_7'),
        t('about_us.principals_p6_8'),
        t('about_us.principals_p6_9'),
        t('about_us.principals_p6_10'),
        t('about_us.principals_p6_11'),
        t('about_us.principals_p6_12')
      ].join('\n\n'),
      title: t('about_us.principals_p6_1')
    }
  ]

  return (
    <div className="flex flex-col gap-2 pl-6 md:pl-0">
      {accordionItems.map((item, idx) => (
        <Accordion
          description={item.description}
          expanded={expanded}
          idx={idx}
          key={idx}
          setExpanded={setExpanded}
          title={item.title}
        />
      ))}
    </div>
  )
}

export default AccordionSection
