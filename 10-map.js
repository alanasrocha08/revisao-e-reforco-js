/* ExercícioAdd commentMore actions
Gere uma nova de lista de cursos contendo apenas os titulos e as categorias. */
const cursosComTituloCategoria = cursos.map((curso) => {
  return {
    titulo: curso.titulo,
    categoria: curso.categoria,
  };
});

console.log(cursosComTituloCategoria);
