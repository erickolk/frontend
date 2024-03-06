<div className="w-4/5 h-full flex self-center">
      <form className="flex w-4/5 flex-col justify-between m-8" onSubmit={postRegister}>
        <Input name="name" id="nameField" placeholder="Digite seu nome de usuário..." onChange={handleChange} />
        <Input type="email" name="email" id="emailField" placeholder="Email" onChange={handleChange} />
        <Input type="password" name="password" id="passField" placeholder="Insira uma senha forte..." onChange={handleChange} />
        <Input type="password" name="confirmPassword" id="confirmPassField" placeholder="Confirme sua senha..." onChange={handleChange} />
        <div className="flex justify-between">
          {/* Verifique se o componente Button aceita o tipo "submit" corretamente */}
          <Button type="submit" variant="registerBtn">Enviar</Button>
          {/* Este botão pode precisar de um tipo "button" se for apenas para cancelar sem submeter o formulário */}
          <Button type="button" variant="cancel">Cancelar</Button>
        </div>
      </form>
    </div>