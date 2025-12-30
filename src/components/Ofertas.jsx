import imgMulhercupom from '../assets/img/Cupom.webp'

function Ofertas() {
  return (
<section className="flex justify-center items-center gap-20 pb-8 md:pb-16 pt-96 bg-white px-6">
  <div className='hidden lg:block'>
    <img width="750" height="658" src={imgMulhercupom} alt="Oferta Especial" />
  </div>
  <div>
    <h1 className='text-3xl font-bold mb-6 text-[#000000]'>Aproveite Ofertas Exclusivas!</h1>
    <p className='text-[#000000] text-xl mb-5 max-w-lg'>
      Para facilitar ainda mais a sua jornada financeira, aproveite estes benefícios especiais:
    </p>

    {/* Oferta DFLIX */}
    <div className='mb-9'>
      <p className='text-[#000000] text-xl mb-4 max-w-lg font-semibold'>
        🎬 7 dias de acesso gratuito ao DFLIX<br />
        <span className="text-base font-normal block my-1">
          Conteúdos práticos de educação financeira para organizar seu dinheiro no dia a dia.
        </span>
        Use o cupom: BENEFICIO
      </p>
      {/* Botão DFLIX */}
      <a
        href="https://cupom.dflix.com.br/?code=BENEFICIO"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-lg text-sm md:text-lg text-white px-4 py-2 w-full md:w-auto bg-[#2d2978] font-semibold inline-block text-center"
      >
        Comece agora com 7 dias grátis
      </a>
    </div>

    {/* Oferta Dinbora+ */}
    <div>
      <p className='text-[#000000] text-xl mb-4 max-w-lg font-semibold'>
        📱 50% de desconto na assinatura do Dinbora+<br />
        <span className="text-base font-normal block my-1">
          Controle financeiro simples, personalizado e na palma da mão.
        </span>
        Use o cupom: BENEFICIO
      </p>
      {/* Botão Dinbora+ */}
      <a
        href="https://plus.dinbora.com.br/"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-lg text-sm md:text-lg text-white px-4 py-2 w-full md:w-auto bg-[#2d2978] font-semibold inline-block text-center"
      >
        Acesse e garanta 50% OFF
      </a>
    </div>
  </div>
</section>
  );
}

export default Ofertas;
