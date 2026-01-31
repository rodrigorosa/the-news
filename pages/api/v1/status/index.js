function status(request, response) {
  response.status(200).json({ mensagem: "Tudo parece bem!" });
}

export default status;
