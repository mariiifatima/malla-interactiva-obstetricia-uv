const malla = [
  {
    semestre: 1,
    asignaturas: [
      { nombre: "Anatomía", codigo: "MAT 111" },
      { nombre: "Química general y orgánica", codigo: "MAT 112" },
      { nombre: "Biología", codigo: "MAT 113" },
      { nombre: "Histología", codigo: "MAT 114" },
      { nombre: "Psicología general", codigo: "MAT 115" },
      { nombre: "Introducción a la matronería", codigo: "MAT 116" },
      { nombre: "Autorregulación", codigo: "MAT 117" },
      { nombre: "Lenguaje y comunicación", codigo: "MAT 118" },
    ]
  },
  {
    semestre: 2,
    asignaturas: [
      { nombre: "Embriología", codigo: "MAT 121", requisitos: ["MAT 111", "MAT 113"] },
      { nombre: "Bioquímica", codigo: "MAT 122", requisitos: ["MAT 112"] },
      { nombre: "Microbiología", codigo: "MAT 123", requisitos: ["MAT 113", "MAT 114"] },
      { nombre: "Fisiología", codigo: "MAT 124", requisitos: ["MAT 111", "MAT 113", "MAT 114"] },
      { nombre: "Atención de matronería I", codigo: "MAT 125", requisitos: ["MAT 111", "MAT 113", "MAT 116"] },
      { nombre: "Matemática aplicada en salud", codigo: "MAT 126" },
      { nombre: "Inglés I", codigo: "MAT 127" },
      { nombre: "Educación en salud e interculturalidad", codigo: "MAT 128", requisitos: ["MAT 115", "MAT 117"] },
    ]
  },
  {
    semestre: 3,
    asignaturas: [
      { nombre: "Fisiopatología", codigo: "MAT 211", requisitos: ["MAT 123", "MAT 124"] },
      { nombre: "Salud fetal y neonatal I", codigo: "MAT 212", requisitos: ["MAT 121", "MAT 124"] },
      { nombre: "Salud ginecológica I", codigo: "MAT 213", requisitos: ["MAT 121", "MAT 124"] },
      { nombre: "Salud obstétrica I", codigo: "MAT 214", requisitos: ["MAT 121", "MAT 124"] },
      { nombre: "Atención de matronería II", codigo: "MAT 215", requisitos: ["MAT 124", "MAT 125"] },
      { nombre: "Farmacología aplicada", codigo: "MAT 216", requisitos: ["MAT 122", "MAT 124"] },
      { nombre: "Salud pública", codigo: "MAT 217", requisitos: ["MAT 126", "MAT 128"] },
      { nombre: "Inglés II", codigo: "MAT 218", requisitos: ["MAT 127"] },
    ]
  },
  {
    semestre: 4,
    asignaturas: [
      { nombre: "Salud familiar y comunitaria", codigo: "MAT 221", requisitos: ["MAT 213", "MAT 214"] },
      { nombre: "Salud fetal y neonatal II", codigo: "MAT 222", requisitos: ["MAT 211", "MAT 212", "MAT 216"] },
      { nombre: "Salud ginecológica II", codigo: "MAT 223", requisitos: ["MAT 211", "MAT 213", "MAT 216"] },
      { nombre: "Salud obstétrica II", codigo: "MAT 224", requisitos: ["MAT 211", "MAT 214", "MAT 216"] },
      { nombre: "Atención de matronería III", codigo: "MAT 225", requisitos: ["MAT 215", "MAT 216"] },
      { nombre: "Módulo práctico obstétrico", codigo: "MAT 226", requisitos: ["MAT 212", "MAT 214", "MAT 215"] },
      { nombre: "Sexualidad y afectividad", codigo: "MAT 227", requisitos: ["MAT 211", "MAT 213"] },
      { nombre: "Bioestadística para el diseño de investigación", codigo: "MAT 228", requisitos: ["MAT 217", "MAT 218"] },
    ]
  },
  {
    semestre: 5,
    asignaturas: [
      { nombre: "Salud familiar aplicada I", codigo: "MAT 311", requisitos: ["MAT 221", "MAT 223", "MAT 224"] },
      { nombre: "Salud neonatal aplicada I", codigo: "MAT 312", requisitos: ["MAT 222", "MAT 225"] },
      { nombre: "Salud ginecológica aplicada I", codigo: "MAT 313", requisitos: ["MAT 223", "MAT 227"] },
      { nombre: "Salud obstétrica aplicada I", codigo: "MAT 314", requisitos: ["MAT 224", "MAT 225"] },
      { nombre: "Módulo práctico integrado I", codigo: "MAT 315", requisitos: ["MAT 224", "MAT 225", "MAT 226"] },
      { nombre: "Gerontología", codigo: "MAT 316", requisitos: ["MAT 223", "MAT 225"] },
      { nombre: "Metodología de la investigación I", codigo: "MAT 317", requisitos: ["MAT 228"] },
      { nombre: "Tipe I", codigo: "MAT 318", requisitos: ["MAT 221", "MAT 223", "MAT 227"] },
    ]
  },
  {
    semestre: 6,
    asignaturas: [
      { nombre: "Salud familiar aplicada II", codigo: "MAT 321", requisitos: ["MAT 311"] },
      { nombre: "Salud neonatal aplicada II", codigo: "MAT 322", requisitos: ["MAT 312"] },
      { nombre: "Salud ginecológica aplicada II", codigo: "MAT 323", requisitos: ["MAT 313"] },
      { nombre: "Salud obstétrica aplicada II", codigo: "MAT 324", requisitos: ["MAT 314"] },
      { nombre: "Módulo práctico integrado I", codigo: "MAT 325", requisitos: ["MAT 224", "MAT 225", "MAT 226"] },
      { nombre: "Metodología de la investigación II", codigo: "MAT 326", requisitos: ["MAT 317"] },
      { nombre: "Gerenciamiento y liderazgo I", codigo: "MAT 327", requisitos: ["MAT 117", "MAT 218"] },
    ]
  },
  {
    semestre: 7,
    asignaturas: [
      { nombre: "Salud familiar integrada I", codigo: "MAT 411", requisitos: ["MAT 321", "MAT 323"] },
      { nombre: "Salud neonatal integrada I", codigo: "MAT 412", requisitos: ["MAT 322"] },
      { nombre: "Salud gineco-obstétrica integrada I", codigo: "MAT 413", requisitos: ["MAT 323", "MAT 324"] },
      { nombre: "Módulo práctico integrado II", codigo: "MAT 414", requisitos: ["MAT 321", "MAT 322", "MAT 323", "MAT 315"] },
      { nombre: "Seminario de tesis I", codigo: "MAT 415", requisitos: ["MAT 326"] },
      { nombre: "Gerenciamiento y liderazgo II", codigo: "MAT 416", requisitos: ["MAT 327"] },
    ]
  },
  {
    semestre: 8,
    asignaturas: [
      { nombre: "Salud familiar integrada II", codigo: "MAT 421", requisitos: ["MAT 411"] },
      { nombre: "Salud neonatal integrada II", codigo: "MAT 422", requisitos: ["MAT 412"] },
      { nombre: "Salud gineco-obstétrica integrada II", codigo: "MAT 423", requisitos: ["MAT 413"] },
      { nombre: "Módulo práctico integrado II", codigo: "MAT 424", requisitos: ["MAT 321", "MAT 322", "MAT 323", "MAT 315"] },
      { nombre: "Seminario de tesis II", codigo: "MAT 425", requisitos: ["MAT 415"] },
      { nombre: "Tipe II", codigo: "MAT 426", requisitos: ["MAT 318", "MAT 416"] },
    ]
  },
  {
    semestre: 9,
    asignaturas: [
      { nombre: "Internado intrahospitalario I", codigo: "MAT 511", requisitos: ["MAT 421", "MAT 422", "MAT 423", "MAT 424", "MAT 425", "MAT 426"] },
      { nombre: "Internado salud familiar y gestión I", codigo: "MAT 512", requisitos: ["MAT 421", "MAT 422", "MAT 423", "MAT 424", "MAT 425", "MAT 426"] },
    ]
  },
  {
    semestre: 10,
    asignaturas: [
      { nombre: "Internado intrahospitalario II", codigo: "MAT 521", requisitos: ["MAT 421", "MAT 422", "MAT 423", "MAT 424", "MAT 425", "MAT 426"] },
      { nombre: "Internado salud familiar y gestión II", codigo: "MAT 522", requisitos: ["MAT 421", "MAT 422", "MAT 423", "MAT 424", "MAT 425", "MAT 426"] },
    ]
  }
];

function crearMalla() {
  const contenedor = document.getElementById("malla");
  malla.forEach(semestre => {
    const divSem = document.createElement("div");
    divSem.className = "semestre";
    divSem.innerHTML = `<h2>Semestre ${semestre.semestre}</h2>`;
    semestre.asignaturas.forEach(ramo => {
      const divRamo = document.createElement("div");
      divRamo.className = "ramo";
      divRamo.textContent = `${ramo.nombre}\n${ramo.codigo}`;
      divRamo.dataset.codigo = ramo.codigo;
      if (ramo.requisitos) divRamo.classList.add("bloqueado");
      divSem.appendChild(divRamo);
    });
    contenedor.appendChild(divSem);
  });
}

window.onload = crearMalla;


