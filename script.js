const sections = [
  {
    title: "Respostas Diretas e Tom de Voz",
    description:
      "Um cliente estava frustrado por não ter recebido um aumento de limite mesmo após seguir todas as orientações. O agente, ao invés de demonstrar empatia, simplesmente informou que a próxima análise seria no próximo mês. 😕",
    options: [
      "O agente não ofereceu um prazo claro.",
      "O agente repetiu o que o cliente já sabia sem demonstrar empatia.",
      "O agente se colocou no lugar do cliente e explicou o processo detalhadamente.",
      "O agente orientou o cliente sobre o que ele poderia fazer para aumentar as chances de um aumento de limite.",
    ],
    correctOption: 2,
    bestPractice:
      "Mostre empatia e ofereça explicações detalhadas ao cliente, sempre colocando-se no lugar dele para garantir que ele se sinta acolhido.",
  },
  {
    title: "Investigação Inadequada",
    description:
      "Um cliente relatou que um pagamento foi deduzido da sua fatura, mas ele tinha certeza de que havia pago. O agente respondeu que não havia nada no sistema e pediu para o cliente verificar suas contas. 🤔",
    options: [
      "O agente deveria ter investigado melhor antes de pedir que o cliente verificasse suas contas.",
      "O agente orientou o cliente corretamente e pediu desculpas.",
      "O agente explicou detalhadamente o processo.",
      "O agente mostrou empatia, revisando o histórico do cliente antes de responder.",
    ],
    correctOption: 0,
    bestPractice:
      "Sempre investigue os detalhes do histórico do cliente antes de passar informações. Isso ajuda a evitar frustrações e informações desconexas.",
  },
  {
    title: "Tom de Voz Negativo: Uso de 'Infelizmente'",
    description:
      "Um cliente solicitou aumento de limite, mas o agente utilizou a palavra 'infelizmente' ao negar o pedido, transmitindo uma sensação negativa. 😟",
    options: [
      "O agente usou a palavra 'infelizmente', o que pode transmitir negatividade.",
      "O agente explicou o processo de forma empática e sugeriu alternativas ao cliente.",
      "O agente evitou o termo 'infelizmente' e utilizou uma linguagem mais positiva e objetiva.",
      "O agente explicou que o aumento de limite não seria possível no momento.",
    ],
    correctOption: 2,
    bestPractice:
      "Evite o uso de termos como 'infelizmente' que podem criar um tom negativo. Prefira uma linguagem objetiva e empática, como 'No momento não é possível'.",
  },
  {
    title: "Respostas Rasas",
    description:
      "Um cliente tentou acessar o aplicativo para gerar um comprovante de pagamento, mas não conseguiu. O agente simplesmente enviou um tutorial sem investigar o problema. 📄",
    options: [
      "O agente ofereceu um tutorial, mas deveria ter se envolvido mais.",
      "O agente se ofereceu para ajudar com o problema técnico do cliente.",
      "O agente ignorou a frustração do cliente e deu uma resposta rasa.",
      "O agente limitou-se a enviar o tutorial sem verificar o que estava acontecendo.",
    ],
    correctOption: 1,
    bestPractice:
      "Seja proativo e ofereça mais do que uma solução automatizada. Investigue e demonstre interesse em resolver o problema.",
  },
  {
    title: "Falta de Empatia",
    description:
      "Um cliente tentou alterar a data de vencimento da fatura, mas foi informado que não seria possível, sem maiores explicações ou demonstração de empatia. 😟",
    options: [
      "O agente explicou a situação detalhadamente e demonstrou empatia.",
      "O agente se limitou a dizer que a data não podia ser alterada sem explicar o motivo.",
      "O agente ofereceu opções alternativas para o cliente.",
      "O agente verificou se havia algo mais que o cliente poderia fazer.",
    ],
    correctOption: 0,
    bestPractice:
      "Se coloque no lugar do cliente e ofereça uma explicação detalhada para evitar frustrações. Mostre que você está lá para ajudar.",
  },
  {
    title: "Confusão sobre Fatura",
    description:
      "Uma cliente não entendeu porque a fatura com a nova data não aparecia no aplicativo. O agente deu uma resposta rasa sem explicar o motivo da desatualização. 😕",
    options: [
      "O agente deveria ter explicado que as faturas possuem dias mínimos e máximos entre elas.",
      "O agente forneceu uma solução imediata sem verificar a situação.",
      "O agente ignorou a dificuldade da cliente com o aplicativo.",
      "O agente pediu para a cliente tentar novamente mais tarde.",
    ],
    correctOption: 0,
    bestPractice:
      "Ofereça explicações claras sobre o funcionamento do sistema, com detalhes que ajudem o cliente a entender o que está acontecendo.",
  },
  {
    title: "Limite Negativo",
    description:
      "Um cliente relatou que o limite do cartão estava negativo mesmo após o pagamento. O agente apenas confirmou o saldo negativo sem dar mais detalhes. 🤔",
    options: [
      "O agente deveria ter consultado o histórico de pagamentos e dado mais contexto.",
      "O agente mencionou que o problema não era do atendimento.",
      "O agente não perguntou se havia transações pendentes.",
      "O agente ofereceu ajuda para entender a discrepância.",
    ],
    correctOption: 0,
    bestPractice:
      "Verifique todos os detalhes antes de dar uma resposta ao cliente. Explicações claras evitam confusões futuras.",
  },
];

function startWorkshop() {
  let content =
    '<h2 class="text-2xl font-bold text-gray-800 mb-4 text-center">Seções de Aprendizado 📚</h2>';
  content += '<div class="container">';
  sections.forEach((section, index) => {
    content += `
            <div class="p-4 bg-gray-100 rounded-lg shadow text-center">
                <h3 class="text-xl font-semibold text-gray-700">${section.title}</h3>
                <button class="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105" onclick="showQuiz(${index})">Teste seu conhecimento 🧠</button>
            </div>
        `;
  });
  content += "</div>";
  document.getElementById("section-content").innerHTML = content;
  document.getElementById("section-content").classList.remove("hidden");
  document.getElementById("start-btn").classList.add("hidden"); // Esconde o botão "Iniciar Workshop"
}

function showQuiz(index) {
  const section = sections[index];
  let quizContent = `
        <h2 class="text-2xl font-bold text-gray-800 mb-4 text-center">${section.title} - Quiz 📝</h2>
        <p class="text-gray-600 mb-4">${section.description}</p>
        <p class="text-gray-600 mb-4 text-center">Qual é a melhor prática para lidar com esta situação?</p>
    `;
  section.options.forEach((option, i) => {
    quizContent += `
            <button id="option-${i}" class="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-3 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 mb-2" onclick="checkAnswer(${
      i === section.correctOption
    }, ${i}, ${index})">${option}</button>
        `;
  });
  quizContent += `<button class="w-full bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 mt-4" onclick="startWorkshop()">Voltar 🔙</button>`;
  document.getElementById("section-content").innerHTML = quizContent;
}

function checkAnswer(isCorrect, optionIndex, sectionIndex) {
  const section = sections[sectionIndex];
  let feedback = "";

  if (isCorrect) {
    feedback = `
            <div class="feedback correct">
                <p>Correto! 🎉 ${section.bestPractice}</p>
            </div>
        `;
  } else {
    feedback = `
            <div class="feedback incorrect">
                <p>Incorreto. Tente novamente. ❌</p>
            </div>
        `;
  }

  document
    .getElementById(`option-${optionIndex}`)
    .insertAdjacentHTML("afterend", feedback);
}
