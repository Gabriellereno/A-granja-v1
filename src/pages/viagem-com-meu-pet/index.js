import Slide from '@/components/Slide';
import React from 'react';
import styles from '@/styles/pages/viagem.module.css';
import Image from 'next/image';

export default function index() {
  return (
    <div className={styles.viagemBg}>
      <Slide />
      <main className={styles.viagemContainer}>
        <article className={styles.viagemArticle}>
          <h1>O que é necessário para viajar com o pet?</h1>
          <section>
            <p>
              Você é aquele tutor que não curte a ideia de deixar o seu pet em
              hotelzinho ou aos cuidados de terceiros e ama viajar com o pet,
              para levar ele junto nas suas aventuras? Então vem com a gente que
              esse conteúdo promete muitas dicas para você!
            </p>

            <p>
              Quando falamos em viajar com o pet, os requisitos variam de acordo
              com o tipo de animal e meio de transporte. Por isso, separamos o
              conteúdo da seguinte maneira:
            </p>

            <ul>
              <li>O que levar na mala do seu pet</li>
              <li>Viagens Nacionais</li>
              <li>
                <ul>
                  <li>Avião e Ônibus</li>
                  <li>
                    <ul>
                      <li>Carteirinha de vacinação</li>
                      <li>Atestado de saúde</li>
                    </ul>
                  </li>
                  <li>Carro</li>
                  <li>
                    <ul>
                      <li>Como transportar cachorro e gato no automóvel</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>

            <p>Vamos lá?</p>
          </section>

          <section>
            <h2>O que levar na mala do seu pet</h2>

            <p>
              Antes de embarcarmos de vez nessa viagem, vamos dar uns passos
              atrás e pensar na mala do pet? Alguns itens podem variar de acordo
              com o destino escolhido e com as atividades que você pensou em
              realizar com o seu pet. Também é importante verificar a
              temperatura do local escolhido, para evitar surpresas!
            </p>
            <div className={styles.viagemImg1}></div>

            <h2>Identifique as suas malas</h2>
            <p>
              Uma dica muito interessante é você identificar as malas, tanto as
              suas quanto as do pet, com uma tag pendurada em alguma alça da
              bolsa.
              <br />
              <br />
              Nessa tag o ideal é que constem os dados de contato com você e seu
              nome, já que é comum acontecerem perdas após despachar as bolsas,
              ou extravios.
              <br />
              Feito isso, agora vamos pensar nos itens que irão compor a mala
              para viajar com o pet.
            </p>
            <h2>Itens de higiene</h2>
            <p>
              Afinal, a rotina de higiene deve se manter mesmo durante as
              viagens.
              <br /> Escova e pasta de dente Shampoo e toalhas Lenço umedecido é
              bacana para limpar as patas quando forem entrar no carro ou no
              hotel
            </p>
            <h2>Mini farmacinha</h2>
            <p>
              Protetor solar específico de gato ou cachorro: indicado para todos
              os pets, principalmente os que possuem pelagem mais branca. Passar
              o produto sempre que for passear na área externa. Espalhar o
              produto por todo o corpo do animal, especialmente em áreas com
              menos pelagem, como o focinho. <br />
              <br />
              Roupinhas com proteção ultravioleta: são uma opção para proteger
              contra as queimaduras do sol, porém: Elas não protegem o focinho,
              os olhos e as orelhas...Alerta para os animais que tem falta de
              pigmento nessas regiões. Podem esquentar um pouco mais, e em
              animais que têm problemas de pele, não é indicada, pois vai abafar
              ainda mais. Tem cães que não estão acostumados, então pode ser
              estressante. Avaliando todas essas questões, as roupinhas podem
              ser uma opção!
              <br />
              <br />
              Repelente: assim como nós, os pets também estão expostos a picadas
              de animais contagiosos. É assim que ocorre a transmissão da
              leishmaniose canina, por exemplo. Por isso, o repelente é
              extremamente necessário e útil para casos de viagens a lugares que
              você não conhece o histórico de contaminações. <br />
              <br />
              Coleira repelente: é impregnada de inseticida e tem a função de
              espantar e matar o “mosquito-palha”, contribuindo para a segurança
              do seu cão e da sua família. A coleira dura de quatro a oito
              meses, de acordo com os cuidados que o tutor tiver com ela. Por
              exemplo, para conservá-la por mais tempo, é importante evitar que
              ela molhe, por isso, retire-a para os banhos. <br />
              <br />
              Pipeta repelente: com inseticida, o produto funciona de maneira
              semelhante a coleira repelente, devendo ser aplicado na nuca do
              pet a cada 30 dias. É importante garantir que o pet não consiga
              lamber nem ingerir o conteúdo da pipeta. A pipeta tem ação
              imediata contra pulgas, carrapatos e principalmente contra o
              “mosquito” transmissor da leishmaniose.
              <br />
              <br />
              Remédios para náuseas que sejam prescritos por um veterinário
              Tapete higiênico ou outro método que o seu pet se adapte melhor
            </p>
            <h2>Alimentação</h2>
            <p>
              Pote de ração e de água Ração. <br />
              Há itens como guias, coleiras, roupinhas e outros que ficam a
              critério de cada tutor.
            </p>
            <div className={styles.viagemImg3}></div>
          </section>

          <section>
            <h2>Viagens Nacionais</h2>

            <p>
              Cada país possui as suas próprias peculiaridades e exigências,
              portanto, para que possamos atingir o nosso objetivo, o conteúdo
              será focado em viagens com o pet em território nacional. <br />
              <br />
              Antes de mais nada, é preciso saber qual será o meio de transporte
              utilizado para viajar com o pet: você irá de avião, de ônibus ou
              de carro?
            </p>
          </section>

          <section>
            <h2>Avião e Ônibus</h2>
            <p>
              A primeira coisa que você terá de fazer é ir até a companhia
              escolhida para realizar a viagem e se informar sobre as passagens,
              pois normalmente há um limite máximo de animais por viagem, e
              também porque não são todas as companhias que levam animais.
              <br />
              <br />
              Depois que você já se informou sobre as passagens, agora é hora de
              garantir que a documentação exigida esteja em dia. Veja quais são:
              <br />
              Carteirinha de vacinação
              <br />
              Sem estar com as vacinas obrigatórias (V10 e Antirrábica) em dia,
              tendo feito elas em até 30 dias antes da viagem, o seu animal não
              poderá viajar.
              <br />
              Isso é extremamente importante, tanto para o seu pet não contrair
              nenhum tipo de doença, quanto para garantir de que ele não irá
              levar nenhuma doença para o destino da viagem.
              <br />
              <br />
              Além das vacinas obrigatórias que nós citamos aqui, existem outras
              que são muito indicadas, para que você não corra o risco do seu
              pet contrair uma zoonose e ainda estragar o passeio.
              <br />
              <br />
              Veja as vacinas indicadas:
              <br />
              <br />
              Vacina para gripe
              <br />
              Vacina para giárdia
              <br />
              Vacina para leishmaniose
              <br />
              Além dessas, qualquer outra que seja indicada pelo médico
              veterinário que cuida da saúde do seu pet. Afinal, vacina é
              prevenção!
            </p>
          </section>
          <section>
            <h2>Vermifugação</h2>
            <p>
              A vermifugação não é uma exigência, mas é importante que ela
              esteja em dia.
              <br />
              <br />
              Tanto para cães, quanto para gatos, a recomendação é de que o
              vermífugo seja feito durante toda a vida do animal. Normalmente a
              cada seis meses, com duas doses, uma a cada 15 dias.
              <br />
              <br />
              Além disso, outra recomendação é que a vermifugação seja feita 10
              dias antes do parto da fêmea prenha, para evitar que os filhotes
              tenham complicações por vermes logo após o nascimento.
              <br />
              <br />
              Os filhotes também devem ser vermifugados durante a lactação e nos
              períodos de 2, 4, 8 e 12 semanas após o desmame, e a fêmea tem que
              ser vermifugada no mesmo tempo que a ninhada.
              <br />
              <br />
              Lembrando que os filhotes precisam ser pesados, a mãezinha também,
              para fazer a dose certa do vermífugo.
            </p>
          </section>
          <section>
            <h2>Atestado de saúde</h2>
            <p>
              Com a vacinação e o vermífugo em dia, estará tudo pronto para
              viajar com o pet! <br />
              <br />
              O médico veterinário irá preencher esse documento, certificando
              que a saúde do animal está em boas condições para a viagem, e
              assinar.
              <br />
              <br />
              Aqui vai um alerta importante: a partir da data da assinatura do
              médico veterinário, o atestado de saúde tem validade de 10 dias!
              Então, se a sua viagem tiver uma duração maior que isso, se
              programe para encontrar uma clínica no destino da sua viagem e
              providenciar um novo atestado de saúde para a volta.
              <br />
              <br />
            </p>
          </section>

          <section>
            <h2>Carro</h2>
            <p>
              As exigências para viagens nesse formato seguem as mesmas que já
              citamos acima, nas modalidades de viagens através de ônibus ou
              avião, caso o veículo seja abordado em uma blitz será necessário
              apresentar os documentos que citamos (carteirinha de vacinação em
              dia e atestado de saúde animal).
            </p>
            <div className={styles.viagemImg2}></div>
          </section>

          <section>
            <h2>Como transportar cachorro e gato no carro</h2>
            <p>A regra é que o animal não consiga circular no automóvel.</p>
            <p>
              Caixinha de transporte
              <br />
              <br /> Então você pode optar pelas caixinhas de transporte que
              tenham um tamanho adequado ao porte do animal.
              <br />
              <br />A indicação é de que o tamanho da caixa proporcione ao
              animal liberdade para dar pelo menos um giro de 360°.
            </p>
          </section>

          <section>
            <h2>Outra opção é o cinto de segurança para animal</h2>
            <p>
              Uma ponta é engatada no plug do cinto, e a outra é acoplada à
              coleira do pet. Porém, um alerta urgente: não acople na coleira
              plana tradicional, aquela que vai ao redor do pescoço do animal,
              acople apenas às coleiras peitorais. Assim, caso você precise
              realizar uma frenagem brusca, o seu pet não irá ser enforcado, mas
              ficará preso de forma segura!
            </p>
            <p>
              Essas são as principais dicas para quem vai viajar com o pet. Se
              esse conteúdo foi útil para você, compartilhe nas suas redes
              sociais e fale conosco, vamos providenciar tudo o que o seu pet
              precisa para realizar uma viagem tranquila e segura.
            </p>
          </section>
        </article>
      </main>
    </div>
  );
}
