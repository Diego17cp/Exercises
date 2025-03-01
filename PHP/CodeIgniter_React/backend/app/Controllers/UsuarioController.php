<?php 
namespace App\Controllers;
use CodeIgniter\RESTful\ResourceController;

class UsuarioController extends ResourceController
{
    protected $modelName = 'App\Models\UsuarioModel';
    protected $format = 'json';

    public function index()
    {
        return $this->respond($this->model->findAll());
    }
    public function show($id = null)
    {
        $user = $this->model->find($id);
        $user ? $this->respond($user) : $this->failNotFound('No se encontró el usuario');
    }
    public function crear_id_usuario()
    {
        do {
            $id = 'US' . substr(uniqid(), -6);
            $existe = $this->model->find($id);
        } while ($existe);
        return $id;
    }
    public function create()
    {
        $data = $this->request->getPost();
        if ($data) {
            $data['id_usuario'] = $this->crear_id_usuario();
            $this->model->insert($data);
            return $this->respondCreated([
                'message' => 'Usuario creado exitosamente'
            ]);
        }
        return $this->fail($this->model->errors());
    }
    public function update($id = null)
    {
        $data = $this->request->getRawInput();
        if ($this->model->update($id, $data)) {
            return $this->respond([
                'message' => 'Usuario actualizado exitosamente'
            ]);
        }
        return $this->fail($this->model->errors());
    }
    public function delete($id = null)
    {
        if ($this->model->delete($id)) {
            return $this->respondDeleted([
                'message' => 'Usuario eliminado exitosamente'
            ]);
        }
        return $this->fail($this->model->errors());
    }
}
?>