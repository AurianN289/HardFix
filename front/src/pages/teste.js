import React from 'react'
import { Search, Bell, Menu } from 'lucide-react'
import { MessageSquare, Eye, ChevronUp } from 'lucide-react'

function Teste() {
    const hasAnswers = 9 > 0

    return(
        <>
            {/*header*/}
            <nav className="navbar navbar-light bg-white border-bottom px-3">

                {/* Left */}
                <div className="d-flex align-items-center gap-2">
                    <button className="btn d-lg-none">
                    <Menu size={20} />
                    </button>

                    <span className="fw-bold">
                    Hardware<span className="text-warning">Hub</span>
                    </span>
                </div>

                {/* Search */}
                <form className="d-none d-md-flex w-50">
                    <div className="input-group">
                    <span className="input-group-text bg-light border-end-0">
                        <Search size={16} />
                    </span>
                    <input
                        type="search"
                        className="form-control border-start-0"
                        placeholder="Pesquisar..."
                    />
                    </div>
                </form>

                {/* Right */}
                <div className="d-flex align-items-center gap-2">
                    <button className="btn">
                    <Bell size={18} />
                    </button>

                    <button className="btn btn-warning d-none d-sm-block">
                    Perguntar
                    </button>

                    <div className="rounded-circle bg-warning text-white d-flex align-items-center justify-content-center"
                        style={{ width: 35, height: 35 }}>
                    U
                    </div>
                </div>

            </nav>


            <div className='container'>
                <article
                    className="d-flex gap-3 p-4 bg-white border rounded shadow-sm cursor-pointer"
                    role="article"
                    aria-label={`Pergunta: Como melhorar a performance do meu PC?`}
                    style={{ transition: '0.2s' }}
                >

                    {/* Stats column (desktop) */}
                    <div className="d-none d-sm-flex flex-column align-items-center gap-2" style={{ minWidth: '64px' }}>
                        
                        <div className="text-center">
                        <ChevronUp size={16} className="text-info mb-1" />
                        <div className="fw-semibold text-info">52</div>
                        <div className="text-uppercase text-muted" style={{ fontSize: '10px' }}>
                            votos
                        </div>
                        </div>

                        <div
                        className={`text-center px-2 py-1 rounded border ${
                            hasAnswers ? 'bg-success-subtle border-success' : 'bg-light border-light'
                        }`}
                        >
                        <div className={`fw-semibold ${hasAnswers ? 'text-success' : 'text-muted'}`}>
                            9
                        </div>
                        <div className="text-uppercase" style={{ fontSize: '10px' }}>
                            resp.
                        </div>
                        </div>

                        <div className="text-center">
                        <div className="text-muted small">123</div>
                        <div className="text-uppercase text-muted" style={{ fontSize: '10px' }}>
                            views
                        </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex-grow-1">

                        <h3 className="fs-6 fw-semibold mb-2">
                        Como melhorar a performance do meu PC?
                        </h3>

                        <p className="text-muted mb-3">
                        Meu PC começou a desligar sozinho aleatoriamente. Já testei a memória RAM e o SSD, ambos passaram nos testes. Suspeito que seja a fonte, mas não sei como confirmar sem ter outra fonte para testar.
                        </p>

                        {/* Mobile stats */}
                        <div className="d-flex d-sm-none gap-3 mb-3 small text-muted">
                        
                        <span className="d-flex align-items-center gap-1">
                            <ChevronUp size={14} className="text-info" />
                            <span className="fw-medium text-info">52    </span> votos
                        </span>

                        <span className="d-flex align-items-center gap-1">
                            <MessageSquare size={14} />
                            <span className={`fw-medium ${hasAnswers ? 'text-success' : ''}`}>
                            9
                            </span> resp.
                        </span>

                        <span className="d-flex align-items-center gap-1">
                            <Eye size={14} />
                            123 views
                        </span>

                        </div>

                        {/* Tags */}
                        <div className="d-flex flex-wrap gap-2 mb-3">
                        {['fonte','diagnostico','hardware'].map((tag) => (
                            <div> 
                                <span
                                className={`badge bg-primary px-2 py-1 fw-medium`}
                                style={{
                                    fontSize: '0.75rem',
                                    letterSpacing: '0.5px',
                                }}
                                >
                                Performance
                                </span>
                            </div>
                        ))}
                        </div>

                        {/* Meta */}
                        <div className="d-flex align-items-center gap-2 small text-muted">

                        <div
                            className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold"
                            style={{
                            width: '20px',
                            height: '20px',
                            fontSize: '10px',
                            background: 'linear-gradient(to bottom right, orange, darkorange)'
                            }}
                        >
                            {'Carlos'.charAt(0).toUpperCase()}
                        </div>

                        <span className="fw-medium">
                            Carlos
                        </span>

                        <span>·</span>

                        <time>ha 2 dias</time>
                        </div>

                    </div>
                </article>

                <article
                    className="d-flex gap-3 p-4 bg-white border rounded shadow-sm cursor-pointer"
                    role="article"
                    aria-label={`Pergunta: Como melhorar a performance do meu PC?`}
                    style={{ transition: '0.2s' }}
                >

                    {/* Stats column (desktop) */}
                    <div className="d-none d-sm-flex flex-column align-items-center gap-2" style={{ minWidth: '64px' }}>
                        
                        <div className="text-center">
                        <ChevronUp size={16} className="text-info mb-1" />
                        <div className="fw-semibold text-info">52</div>
                        <div className="text-uppercase text-muted" style={{ fontSize: '10px' }}>
                            votos
                        </div>
                        </div>

                        <div
                        className={`text-center px-2 py-1 rounded border ${
                            hasAnswers ? 'bg-success-subtle border-success' : 'bg-light border-light'
                        }`}
                        >
                        <div className={`fw-semibold ${hasAnswers ? 'text-success' : 'text-muted'}`}>
                            9
                        </div>
                        <div className="text-uppercase" style={{ fontSize: '10px' }}>
                            resp.
                        </div>
                        </div>

                        <div className="text-center">
                        <div className="text-muted small">123</div>
                        <div className="text-uppercase text-muted" style={{ fontSize: '10px' }}>
                            views
                        </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex-grow-1">

                        <h3 className="fs-6 fw-semibold mb-2">
                        Como melhorar a performance do meu PC?
                        </h3>

                        <p className="text-muted mb-3">
                        Meu PC começou a desligar sozinho aleatoriamente. Já testei a memória RAM e o SSD, ambos passaram nos testes. Suspeito que seja a fonte, mas não sei como confirmar sem ter outra fonte para testar.
                        </p>

                        {/* Mobile stats */}
                        <div className="d-flex d-sm-none gap-3 mb-3 small text-muted">
                        
                        <span className="d-flex align-items-center gap-1">
                            <ChevronUp size={14} className="text-info" />
                            <span className="fw-medium text-info">52    </span> votos
                        </span>

                        <span className="d-flex align-items-center gap-1">
                            <MessageSquare size={14} />
                            <span className={`fw-medium ${hasAnswers ? 'text-success' : ''}`}>
                            9
                            </span> resp.
                        </span>

                        <span className="d-flex align-items-center gap-1">
                            <Eye size={14} />
                            123 views
                        </span>

                        </div>

                        {/* Tags */}
                        <div className="d-flex flex-wrap gap-2 mb-3">
                        {['fonte','diagnostico','hardware'].map((tag) => (
                            <div> 
                                <span
                                className={`badge bg-primary px-2 py-1 fw-medium`}
                                style={{
                                    fontSize: '0.75rem',
                                    letterSpacing: '0.5px',
                                }}
                                >
                                Performance
                                </span>
                            </div>
                        ))}
                        </div>

                        {/* Meta */}
                        <div className="d-flex align-items-center gap-2 small text-muted">

                        <div
                            className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold"
                            style={{
                            width: '20px',
                            height: '20px',
                            fontSize: '10px',
                            background: 'linear-gradient(to bottom right, orange, darkorange)'
                            }}
                        >
                            {'Carlos'.charAt(0).toUpperCase()}
                        </div>

                        <span className="fw-medium">
                            Carlos
                        </span>

                        <span>·</span>

                        <time>ha 2 dias</time>
                        </div>

                    </div>
                </article>
            </div>
        </>
    );
}

export default Teste