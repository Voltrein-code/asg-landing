import develop from '../media/cog-svgrepo-com.svg';
import consalting from '../media/macbook-pro-svgrepo-com.svg';
import admin from '../media/equaliser-svgrepo-com.svg';
import automatization from '../media/target-svgrepo-com.svg';
import help from '../media/phone-handle-svgrepo-com.svg';
import consult from '../media/thumb-up-svgrepo-com.svg';

import technology from '../media/cloud-svgrepo-com.svg';
import strategy from '../media/presentation-svgrepo-com.svg';
import experience from '../media/star-svgrepo-com.svg';

const aboutData = [
  {
    cardIcon: technology,
    cardHeading: 'Технологии',
    cardSubtitle: `Мы имеем значительный опыт работы с несколькими стеками технологий и обладаем навыками
    проектирования и разработки решений "с нуля", начиная от их концептуального проектирования и
    заканчивая полноценной реализацией.`,
  },
  {
    cardIcon: strategy,
    cardHeading: 'Стратегия',
    cardSubtitle: `Наша задача - выявлять реальные потребности бизнеса в области информационных
    технологий и создавать конкурентоспособные IT-решения, которые позволят получить существенные
    преимущества для вашего бизнеса.`,
  },
  {
    cardIcon: experience,
    cardHeading: 'Наш опыт',
    cardSubtitle: `Мы предлагаем полный спектр услуг по созданию комплексных решений, начиная от
    разработки стратегии и заканчивая внедрением и сопровождением, благодаря нашей опытной команде и тесному
    взаимодействию с нашими клиентами.`,
  },
];

const productData = [
  {
    cardIcon: develop,
    cardHeading: 'Разработка продукта',
    cardSubtitle: 'Адаптации имеющихся систем и разработка эффективных решений с нуля',
    cardCheckList: [
      'Разработка с нуля',
      'Адаптация имеющихся систем',
      'Современный подход',
    ],
  },
  {
    cardIcon: automatization,
    cardHeading: 'Автоматизация процессов',
    cardSubtitle: 'Оптимизация бизнес процессов с применением готовых ИТ-решений, а так же индивидуально разработанных',
    cardCheckList: [
      'Эффективность',
      'Анализ проблем',
      'Разработка решений',
    ],
  },
  {
    cardIcon: admin,
    cardHeading: 'Администрирование',
    cardSubtitle: 'Разворачивание и настройка серверных решений с подбором комплектующих',
    cardCheckList: [
      'Современные комплектующие',
      'Устойчивость к нагрузкам',
      'Модульный подход',
    ],
  },
  {
    cardIcon: consalting,
    cardHeading: 'ИТ консалтинг и инжиниринг',
    cardSubtitle: 'Оценка текущего состояния ИТ-систем вашего бизнеса и оптимизация ИТ-процессов',
    cardCheckList: [
      'Объективная оценка',
      'Экспертное мнение',
      'Разработка стратегии',
    ],
  },
  {
    cardIcon: help,
    cardHeading: 'Поддержка и сопровождение',
    cardSubtitle: 'Услуги по сопровождению ПО и обеспечение бесперебойной работы ИТ-инфраструктуры',
    cardCheckList: [
      'Опытные специалисты',
      'Поддержка пользователей',
      'Мониторинг работоспособности',
    ],
  },
  {
    cardIcon: consult,
    cardHeading: 'Консультация',
    cardSubtitle: 'Помощь в подборе комплектующих, программного обеспечения и технологий',
    cardCheckList: [
      'Современные решения',
      'Опыт в нескольких сферах',
      'Квалифицированный персонал',
    ],
  },
];

export {
  aboutData,
  productData,
};
