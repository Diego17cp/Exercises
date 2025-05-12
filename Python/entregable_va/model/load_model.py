import tensorflow
def get_model(path='model/digit_model.h5'):
    return tensorflow.keras.models.load_model(path)