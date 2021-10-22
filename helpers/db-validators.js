const Role=require('../models/role');
const Usuario=require('../models/usuario');
const esRoleValido=async(rol='')=>{
    const existeRol=await Role.findOne({rol})
    if(!existeRol){
      throw new Error(`el rol ${rol} no esta registrado en la base de datos `)
    }
  }

const emailExiste= async(correo)=>{ 
const existeEmail=await Usuario.findOne({correo});
if(existeEmail){
 
  throw new Error(`el correo: ${correo} ya esta registrado`)
}
}
const existeUsuarioPorId= async(id)=>{ 
    const existeUsario=await Usuario.findById(id);
    if(!existeUsario){
     
      throw new Error(`el id no existe ${id}`)
    }
    }
  module.exports={
      esRoleValido,emailExiste,existeUsuarioPorId
  }
