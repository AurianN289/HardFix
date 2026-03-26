import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../components/header';
import QuestionCard from '../components/questionCard';

function Home() {
    const questions = [
  {
    id: 1,
    votos: 52,
    respostas: 9,
    views: 123,
    titulo: 'Como melhorar a performance do meu PC?',
    descricao: 'Meu PC começou a desligar sozinho aleatoriamente...',
    tags: ['Performance', 'Hardware', 'CPU'],
    autor: 'Carlos',
    data: '2 dias atrás'
  },
  {
    id: 2,
    votos: 18,
    respostas: 3,
    views: 87,
    titulo: 'Placa de vídeo não dá vídeo após instalar driver',
    descricao: 'Instalei o driver mais recente da NVIDIA e agora não aparece imagem...',
    tags: ['GPU', 'NVIDIA', 'Driver'],
    autor: 'Ana',
    data: '5 horas atrás'
  },
  {
    id: 3,
    votos: 34,
    respostas: 6,
    views: 201,
    titulo: 'Temperatura da CPU muito alta em idle',
    descricao: 'Mesmo sem rodar nada pesado, meu processador fica acima de 70°C...',
    tags: ['CPU', 'Temperatura', 'Refrigeração'],
    autor: 'João',
    data: '1 dia atrás'
  },
  {
    id: 4,
    votos: 12,
    respostas: 2,
    views: 45,
    titulo: 'SSD NVMe não aparece na BIOS',
    descricao: 'Comprei um SSD NVMe novo, mas ele não aparece na BIOS...',
    tags: ['SSD', 'NVMe', 'Placa-mãe'],
    autor: 'Mariana',
    data: '3 dias atrás'
  },
  {
    id: 5,
    votos: 67,
    respostas: 14,
    views: 340,
    titulo: 'Vale a pena fazer upgrade para DDR5?',
    descricao: 'Estou pensando em trocar minha memória DDR4 por DDR5...',
    tags: ['RAM', 'DDR5', 'Performance'],
    autor: 'Lucas',
    data: '1 semana atrás'
  },
  {
    id: 6,
    votos: 5,
    respostas: 0,
    views: 22,
    titulo: 'Mouse parando de funcionar do nada',
    descricao: 'Meu mouse USB para de funcionar aleatoriamente...',
    tags: ['Mouse', 'USB', 'Periféricos'],
    autor: 'Fernanda',
    data: '2 horas atrás'
  },
  {
    id: 7,
    votos: 41,
    respostas: 8,
    views: 156,
    titulo: 'Fonte pode causar travamentos no sistema?',
    descricao: 'Meu PC trava durante jogos pesados...',
    tags: ['Fonte', 'Energia', 'Hardware'],
    autor: 'Rafael',
    data: '4 dias atrás'
  },
  {
    id: 8,
    votos: 23,
    respostas: 4,
    views: 98,
    titulo: 'Monitor piscando ao usar 144Hz',
    descricao: 'Quando ativo 144Hz meu monitor começa a piscar...',
    tags: ['Monitor', 'Display', 'GPU'],
    autor: 'Bruno',
    data: '6 horas atrás'
  }
];

    return (
        <div>
            <Header />

            <div className='container d-flex flex-column gap-3 mt-4'>
                {questions.map((q, index) => (
                <QuestionCard key={q.id} {...q} index={index} />
                ))}
            </div>
        </div>
    );
}

export default Home;

