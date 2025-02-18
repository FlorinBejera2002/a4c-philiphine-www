'use client'

import InViewTransition from '@/app/[locale]/common/in-view-transition'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

import Project1 from '../../../../../../public/project1.svg'
import Project2 from '../../../../../../public/project2.svg'
import Project3 from '../../../../../../public/project3.svg'
import Project4 from '../../../../../../public/project4.svg'
import Project5 from '../../../../../../public/project5.svg'

const projectsData = [
  { image: Project1, translationKey: 'projects.items.0' },
  { image: Project2, translationKey: 'projects.items.1' },
  { image: Project3, translationKey: 'projects.items.2' },
  { image: Project4, translationKey: 'projects.items.3' },
  { image: Project5, translationKey: 'projects.items.4' }
]

export default function Projects() {
  const t = useTranslations()

  return (
    <section className="bg-white py-12" id="projects">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-start mb-5">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
            {t('projects.section_title')}
          </h3>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">
            t{t('projects.heading')}{' '}
            <span className="text-accent">{t('projects.highlight')}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {projectsData.map((project, index) => (
            <InViewTransition key={index} delay={0.5 + index * 0.25}>
              <div className="bg-blue-50 p-4 rounded-lg md:min-h-96 shadow-md flex flex-col items-center text-center">
                <Image
                  src={project.image}
                  alt={t(`${project.translationKey}.title`)}
                  width={100}
                  height={100}
                />
                <h4 className="text-lg font-semibold text-gray-900 mt-3">
                  {t(`${project.translationKey}.title`)}
                </h4>
                <p className="text-gray-600 mt-2 text-sm">
                  {t(`${project.translationKey}.description`)}
                </p>
              </div>
            </InViewTransition>
          ))}
        </div>
      </div>
    </section>
  )
}
