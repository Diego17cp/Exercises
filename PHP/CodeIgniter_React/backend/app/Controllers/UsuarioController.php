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
        try {
            $json = $this->request->getJSON();
            $userId = $this->crear_id_usuario();
            $data = [
                'id' => $userId,
                'nombre' => $json->nombre ?? null,
                'email' => $json->email ?? null,
                'edad' => isset($json->edad) ? (int)$json->edad : null
            ];
            if ($this->model->insert($data)) {
                return $this->respondCreated([
                    'status' => 201,
                    'error' => null,
                    'messages' => 'Usuario creado exitosamente',
                    'data' => $data
                ]);
            }
            return $this->fail($this->model->errors() ?: 'Error al crear usuario');
        } catch (\Exception $e) {
            log_message('error', 'Create error: ' . $e->getMessage());
            return $this->fail($e->getMessage());
        }
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