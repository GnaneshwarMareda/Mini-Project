let q1 = document.getElementById('q1')
let solution1 = document.getElementById('solution1')
let q2 = document.getElementById('q2')
let solution2 = document.getElementById('solution2')
let q3 = document.getElementById('q3')
let solution3 = document.getElementById('solution3')
let q4 = document.getElementById('q4')
let solution4 = document.getElementById('solution4')
let q5 = document.getElementById('q5')
let solution5 = document.getElementById('solution5')
let q6 = document.getElementById('q6')
let solution6 = document.getElementById('solution6')
let q7 = document.getElementById('q7')
let solution7 = document.getElementById('solution7')
let spinnerEle = document.getElementById('spinnerEle')

let pageNumber = 1

function toggleFormSpinner() {
  spinnerEle.classList.toggle('d-none');
}

q1.addEventListener('click', function () {
  solution1.classList.toggle('d-block')
})
q2.addEventListener('click', function () {
  solution2.classList.toggle('d-block')
})

q3.addEventListener('click', function () {
  solution3.classList.toggle('d-block')
})
q4.addEventListener('click', function () {
  solution4.classList.toggle('d-block')
})
q5.addEventListener('click', function () {
  solution5.classList.toggle('d-block')
})
q6.addEventListener('click', function () {
  solution6.classList.toggle('d-block')
})
q7.addEventListener('click', function () {
  solution7.classList.toggle('d-block')
})

let currentDomain = 'ai'

let homeLink = document.getElementById('navItem1')
let aboutusLink = document.getElementById('navItem2')
let featuresLink = document.getElementById('navItem3')
let faqsLink = document.getElementById('navItem4')

let aboususSection = document.getElementById('aboutUsSection')
let featuresSection = document.getElementById('featuresSection')
let faqsSection = document.getElementById('faqsSection')
let homeSection = document.getElementById('homeSection')

aboutusLink.addEventListener('click', function () {
  featuresSection.classList.add('d-none')
  faqsSection.classList.add('d-none')
  aboususSection.classList.remove('d-none')
  homeSection.classList.add('d-none')
})

featuresLink.addEventListener('click', function () {
  faqsSection.classList.add('d-none')
  aboususSection.classList.add('d-none')
  featuresSection.classList.remove('d-none')
  homeSection.classList.add('d-none')
})

faqsLink.addEventListener('click', function () {
  featuresSection.classList.add('d-none')
  aboususSection.classList.add('d-none')
  faqsSection.classList.remove('d-none')
  homeSection.classList.add('d-none')
})

homeLink.addEventListener('click', function () {
  featuresSection.classList.add('d-none')
  aboususSection.classList.add('d-none')
  faqsSection.classList.add('d-none')
  homeSection.classList.remove('d-none')
})

let content = document.getElementById('content')
let formContainer = document.getElementById('formContainer')
let dataContainer = document.getElementById('dataContainer')
let postBtn = document.getElementById('postBtn')
let container = null

function addLabel(labelname) {
  let labContainer = document.createElement('div')
  labContainer.classList.add('mb-3')
  let input = document.createElement('input')
  input.setAttribute('type', 'text')
  input.classList.add('form-control')
  let err = document.creaeElement('p')
  err.classList.add('err_msg')

  let label = document.createElement('label')
}

postBtn.onclick = function () {
  formContainer.textContent = ''
  formContainer.classList.remove('added')
    container = document.createElement('div')
    container.classList.add('p-3')
    formContainer.appendChild(container)
    let textContainer = document.createElement('div')
    let formHeading = document.createElement('h1')
    formHeading.textContent = 'Add Post'
    formHeading.classList.add('form-heading')
    let icon = document.createElement('i')
    icon.classList.add('fa-solid', 'fa-xmark')
    textContainer.appendChild(formHeading)
    textContainer.appendChild(icon)
    textContainer.classList.add('d-flex', 'flex-row', 'justify-content-between')
    container.appendChild(textContainer)

    let myForm = document.createElement('form')
    myForm.classList.add('pt-3')
    container.appendChild(myForm)

    let orglabContainer = document.createElement('div')
    orglabContainer.classList.add('mb-3')
    myForm.appendChild(orglabContainer)
    let inputorg = document.createElement('input')
    inputorg.setAttribute('type', 'text')
    inputorg.setAttribute('id', 'org')
    inputorg.classList.add('form-control')
    let labelorg = document.createElement('label')
    labelorg.textContent = 'Organinzation'
    labelorg.setAttribute('for', 'org')
    orglabContainer.appendChild(labelorg)
    orglabContainer.appendChild(inputorg)
    let errorg = document.createElement('p')
    errorg.classList.add('err-msg')
    orglabContainer.appendChild(errorg)
    inputorg.addEventListener('blur', function () {
      if (inputorg.value === '') {
        errorg.textContent = 'Required*'
      } else {
        errorg.textContent = ''
      }
    })

    let titlabContainer = document.createElement('div')
    titlabContainer.classList.add('mb-3')
    myForm.appendChild(titlabContainer)
    let inputTit = document.createElement('input')
    inputTit.setAttribute('type', 'text')
    inputTit.setAttribute('id', 'title')
    inputTit.classList.add('form-control')
    let labelTit = document.createElement('label')
    labelTit.textContent = 'Title'
    labelTit.setAttribute('for', 'title')
    titlabContainer.appendChild(labelTit)
    titlabContainer.appendChild(inputTit)
    let errTit = document.createElement('p')
    errTit.classList.add('err-msg')
    titlabContainer.appendChild(errTit)
    inputTit.addEventListener('blur', function () {
      if (inputTit.value === '') {
        errTit.textContent = 'Required*'
      } else {
        errTit.textContent = ''
      }
    })

    let desclabContainer = document.createElement('div')
    desclabContainer.classList.add('mb-3')
    myForm.appendChild(desclabContainer)
    let inputDesc = document.createElement('textarea')
    inputDesc.setAttribute('rows', '5')
    inputDesc.setAttribute('id', 'desc')
    inputDesc.setAttribute('cols', '40')
    inputDesc.setAttribute('placeholder', 'Enter your description here...')
    inputDesc.classList.add('form-control')
    let labelDesc = document.createElement('label')
    labelDesc.textContent = 'Description'
    labelDesc.setAttribute('for', 'desc')
    desclabContainer.appendChild(labelDesc)
    desclabContainer.appendChild(inputDesc)
    let errDesc = document.createElement('p')
    errDesc.classList.add('err-msg')
    desclabContainer.appendChild(errDesc)
    inputDesc.addEventListener('blur', function () {
      if (inputDesc.value === '') {
        errDesc.textContent = 'Required*'
      } else {
        errDesc.textContent = ''
      }
    })

    let courlabContainer = document.createElement('div')
    courlabContainer.classList.add('mb-3')
    myForm.appendChild(courlabContainer)
    let inputCour = document.createElement('input')
    inputCour.setAttribute('type', 'url')
    inputCour.classList.add('course')
    inputCour.setAttribute('placeholder', 'Enter a URL here...')
    inputCour.classList.add('form-control')
    let labelCour = document.createElement('label')
    labelCour.textContent = 'Course Reference'
    labelCour.setAttribute('for', 'course')
    courlabContainer.appendChild(labelCour)
    courlabContainer.appendChild(inputCour)
    let errCour = document.createElement('p')
    errCour.classList.add('err-msg')
    courlabContainer.appendChild(errCour)
    inputCour.addEventListener('blur', function () {
      if (inputCour.value === '') {
        errCour.textContent = 'Required*'
      } else {
        errCour.textContent = ''
      }
    })

    let submitBtn = document.createElement('button')
    submitBtn.setAttribute('type', 'submit')
    submitBtn.classList.add('btn', 'btn-primary', 'mr-2')
    submitBtn.textContent = 'submit'
    myForm.appendChild(submitBtn)

    let resetBtn = document.createElement('button')
    resetBtn.setAttribute('type', 'reset')
    resetBtn.classList.add('btn', 'btn-danger')
    resetBtn.textContent = 'reset'
    myForm.appendChild(resetBtn)

    myForm.addEventListener('submit', function () {
      event.preventDefault()
    })

    submitBtn.onclick = function () {
      if (inputorg.value === '') {
        errorg.textContent = 'Required*'
        return 
      }
      if (inputDesc.value === '') {
        errDesc.textContent = 'Required*'
        return 
      }
      if (inputTit.value === '') {
        errTit.textContent = 'Required*'
        return 
      }
      if (inputCour.value === '') {
        errCour.textContent = 'Required*'
        return 
      }

        const postData = {
          organization: inputorg.value,
          title: inputTit.value,
          description: inputDesc.value,
          course_reference: inputCour.value,
          domain: currentDomain,
        };
      
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(postData),
        };
      
        fetch('http://localhost:3000/post/', options)
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            console.log('Success:', data);
            formContainer.textContent = ""
            let success = document.createElement('p')
            success.textContent = "Post added successfully"
            success.classList.add('spanned-one')
            formContainer.appendChild(success)
            formContainer.appendChild(icon)
            formContainer.classList.add('added')
          })
          .catch(error => {
            console.error('Error:', error);
            console.log('Response:', error.response);
          });
      
    }

    icon.onclick = function () {
      formContainer.classList.remove('added')
      formContainer.textContent = ''
    }
}

let obj = {
  ai: 'Explore the frontier of artificial intelligence and unlock the potential of machine learning algorithms to revolutionize industries, drive innovation, and shape the future of technology.',
  ml: 'Dive into the world of machine learning and discover the power of data-driven insights to solve complex problems, drive decision-making, and transform industries.',
  ds: 'Embark on a journey into the realm of data science and uncover the hidden gems within vast datasets. Discover actionable insights, predictive models, and data-driven strategies to drive innovation and create value.',
  webd: 'Embark on a digital voyage into the world of web development! Unlock the secrets of crafting captivating websites, immersive user experiences, and cutting-edge web applications that leave a lasting impression.',
  devops:
    'Embrace the culture of collaboration, automation, and continuous improvement with DevOps. Discover how DevOps practices empower teams to deliver software faster, more reliably, and with greater efficiency.',
  dsa: 'Embark on a journey of computational exploration and problem-solving prowess with data structures and algorithms. Discover the building blocks of efficient algorithms and unlock the secrets to optimizing code performance.',
  bct: 'Enter the decentralized universe of blockchain technology and witness the evolution of trust, transparency, and decentralization. Explore the endless possibilities of blockchain applications in finance, supply chain, healthcare, and beyond.',
  cs: 'Navigate the digital frontier with confidence and resilience. Explore the world of cybersecurity and arm yourself with the knowledge, tools, and strategies to defend against cyber threats, protect data, and safeguard digital assets.',
}

function addRecords(domain){

  const postData = {
    domain,
    pageNumber,
  };

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(postData),
  };


  fetch('http://localhost:3000/getRecords/', options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {

      if(data.length == 0){
        let error = document.createElement('p')
        error.textContent = 'You \'ve reached the end'
        error.classList.add('end-error')
        dataContainer.appendChild(error)
      }

      function createAndAppend(headTitle,content,myCard){

        let spanned = document.createElement('span');
        spanned.classList.add('spanned-one');
        spanned.textContent = headTitle + ' : ';
        
        let txtEle = document.createElement('p');
        txtEle.appendChild(spanned);
        txtEle.classList.add('card-text')

        if(headTitle !== 'Url'){
  
          txtEle.appendChild(document.createTextNode(content || 'N/A'));

        } else {

          let anchor = document.createElement('a');
          anchor.textContent = content
          anchor.setAttribute('href',content)
          txtEle.appendChild(anchor)

        }

        
        myCard.appendChild(txtEle);


      }

      for(let course of data){
        

        let myCard = document.createElement('div');
        myCard.classList.add('form-container','shadow','p-2','m-3','my-card')
        dataContainer.appendChild(myCard)

        createAndAppend('Title',course['title'],myCard)
        createAndAppend('Organization',course['organization'],myCard)
        createAndAppend('Description',course['description'],myCard)
        createAndAppend('Url',course['course_reference'],myCard)

      }

      let iconsContainer = document.createElement('div')
      iconsContainer.classList.add('icons-container','mt-3')

      dataContainer.appendChild(iconsContainer)

      let leftIcon = document.createElement('i')
      leftIcon.classList.add("fa-solid","fa-chevron-left",'my-icon')
      iconsContainer.appendChild(leftIcon)

      let number = document.createElement('p')
      number.textContent = pageNumber
      number.classList.add('my-number')
      iconsContainer.appendChild(number)

      let rightIcon = document.createElement('i')
      rightIcon.classList.add("fa-solid","fa-chevron-right",'my-icon')
      iconsContainer.appendChild(rightIcon)

      if(pageNumber == 1){
        leftIcon.classList.add('last')
      } else {
        leftIcon.classList.remove('last')
      }

      if(data.length === 0){
        rightIcon.classList.add('last')
      } else{
        rightIcon.classList.remove('last')
      }

      leftIcon.onclick = () => {
        if(pageNumber - 1 == 0) return
        pageNumber = pageNumber - 1;
        dataContainer.textContent = ''
        addContent(domain)
      }

      rightIcon.onclick = () => {
        if(data.length == 0) return
        pageNumber = pageNumber + 1
        dataContainer.textContent = ''
        addContent(domain)
      }


    })
    .catch(error => {
      console.error('Error:', error);
      console.log('Response:', error.response);
    });
}

async function addContent(domain) {
  currentDomain = domain
  let h1 = document.createElement('h1')
  h1.textContent = `\"${obj[domain]}\"`
  h1.classList.add('quote-tag')
  dataContainer.appendChild(h1)
  toggleFormSpinner();
  await setTimeout(() => {
    toggleFormSpinner();
    addRecords(domain);
  },1000);
}

let icon = document.createElement('i')
icon.classList.add('fa-solid', 'fa-arrow-right', 'mt-1')

function addAi() {
  formContainer.textContent = ''
  dataContainer.textContent = ''
  ai.appendChild(icon)
  if (ml.contains(icon)) ml.removeChild(icon)
  if (ds.contains(icon)) ds.removeChild(icon)
  if (webd.contains(icon)) webd.removeChild(icon)
  if (dsa.contains(icon)) dsa.removeChild(icon)
  if (bct.contains(icon)) bct.removeChild(icon)
  if (devops.contains(icon)) devops.removeChild(icon)
  if (cs.contains(icon)) cs.removeChild(icon)
  pageNumber = 1;
  addContent('ai')
}

function addMl() {
  formContainer.textContent = ''
  dataContainer.textContent = ''
  ml.appendChild(icon)
  if (ai.contains(icon)) ai.removeChild(icon)
  if (ds.contains(icon)) ds.removeChild(icon)
  if (webd.contains(icon)) webd.removeChild(icon)
  if (dsa.contains(icon)) dsa.removeChild(icon)
  if (bct.contains(icon)) bct.removeChild(icon)
  if (devops.contains(icon)) devops.removeChild(icon)
  if (cs.contains(icon)) cs.removeChild(icon)
    pageNumber = 1;
    addContent('ml')
}

function addDs() {
  formContainer.textContent = ''
  dataContainer.textContent = ''
  ds.appendChild(icon)
  if (ai.contains(icon)) ai.removeChild(icon)
  if (ml.contains(icon)) ml.removeChild(icon)
  if (webd.contains(icon)) webd.removeChild(icon)
  if (dsa.contains(icon)) dsa.removeChild(icon)
  if (bct.contains(icon)) bct.removeChild(icon)
  if (devops.contains(icon)) devops.removeChild(icon)
  if (cs.contains(icon)) cs.removeChild(icon)
    pageNumber = 1;
    addContent('ds')
}

function addWebd() {
  formContainer.textContent = ''
  dataContainer.textContent = ''
  webd.appendChild(icon)
  if (ai.contains(icon)) ai.removeChild(icon)
  if (ds.contains(icon)) ds.removeChild(icon)
  if (ml.contains(icon)) ml.removeChild(icon)
  if (dsa.contains(icon)) dsa.removeChild(icon)
  if (bct.contains(icon)) bct.removeChild(icon)
  if (devops.contains(icon)) devops.removeChild(icon)
  if (cs.contains(icon)) cs.removeChild(icon)
    pageNumber = 1;
    addContent('webd')
}

function addDsa() {
  formContainer.textContent = ''
  dataContainer.textContent = ''

  dsa.appendChild(icon)
  if (ai.contains(icon)) ai.removeChild(icon)
  if (ds.contains(icon)) ds.removeChild(icon)
  if (webd.contains(icon)) webd.removeChild(icon)
  if (ml.contains(icon)) ml.removeChild(icon)
  if (bct.contains(icon)) bct.removeChild(icon)
  if (devops.contains(icon)) devops.removeChild(icon)
  if (cs.contains(icon)) cs.removeChild(icon)
    pageNumber = 1;
  addContent('dsa')
}

function addDevops() {
  formContainer.textContent = ''
  dataContainer.textContent = ''

  devops.appendChild(icon)
  if (ai.contains(icon)) ai.removeChild(icon)
  if (ds.contains(icon)) ds.removeChild(icon)
  if (webd.contains(icon)) webd.removeChild(icon)
  if (ml.contains(icon)) ml.removeChild(icon)
  if (bct.contains(icon)) bct.removeChild(icon)
  if (dsa.contains(icon)) dsa.removeChild(icon)
  if (cs.contains(icon)) cs.removeChild(icon)
    pageNumber = 1;
  addContent('devops')
}

function addBct() {
  formContainer.textContent = ''
  dataContainer.textContent = ''

  bct.appendChild(icon)
  if (ai.contains(icon)) ai.removeChild(icon)
  if (ds.contains(icon)) ds.removeChild(icon)
  if (webd.contains(icon)) webd.removeChild(icon)
  if (ml.contains(icon)) ml.removeChild(icon)
  if (dsa.contains(icon)) dsa.removeChild(icon)
  if (devops.contains(icon)) devops.removeChild(icon)
  if (cs.contains(icon)) cs.removeChild(icon)
    pageNumber = 1;
  addContent('bct')
}

function addCs() {
  formContainer.textContent = ''
  dataContainer.textContent = ''
  cs.appendChild(icon)
  if (ai.contains(icon)) ai.removeChild(icon)
  if (ds.contains(icon)) ds.removeChild(icon)
  if (webd.contains(icon)) webd.removeChild(icon)
  if (ml.contains(icon)) ml.removeChild(icon)
  if (bct.contains(icon)) bct.removeChild(icon)
  if (devops.contains(icon)) devops.removeChild(icon)
  if (dsa.contains(icon)) dsa.removeChild(icon)
    pageNumber = 1;
    addContent('cs')
}

let ai = document.getElementById('Artificial Intelligence')
let ml = document.getElementById('Machine Learning')
let ds = document.getElementById('Data Science')
let webd = document.getElementById('Web Development')
let dsa = document.getElementById('Data Structures & Algorithms')
let devops = document.getElementById('DevOps')
let bct = document.getElementById('Blockchain')
let cs = document.getElementById('CyberSecurity')

ai.addEventListener('click', addAi)
ml.addEventListener('click', addMl)
ds.addEventListener('click', addDs)
webd.addEventListener('click', addWebd)
dsa.addEventListener('click', addDsa)
devops.addEventListener('click', addDevops)
bct.addEventListener('click', addBct)
cs.addEventListener('click', addCs)


addAi()
