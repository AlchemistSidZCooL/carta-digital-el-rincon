import qrcode
from PIL import Image
import os

# 1. Configuración de rutas y datos
url = "https://elrincontetuan.com"
# Ruta de tu logo dentro del proyecto
logo_path = "carta-digital/public/Favicon-Ricon-Luxury.png"
# Nombre del archivo final
output_path = "QR_Oficial_Mesas.png"

print(f"Generando Código QR para: {url}...")

# 2. Configurar el QR 
# (Usamos ERROR_CORRECT_H para alta corrección de errores, 
#  esto es obligatorio si vas a poner una imagen encima, para que el móvil pueda leerlo)
qr = qrcode.QRCode(
    version=5, 
    error_correction=qrcode.constants.ERROR_CORRECT_H, 
    box_size=15, # Tamaño más grande para mejor resolución de impresión
    border=2, 
)
qr.add_data(url)
qr.make(fit=True)

# 3. Crear la imagen base del QR
# Puedes cambiar "black" por otro color HEX (ej. "#ea580c") si lo prefieres
img_qr = qr.make_image(fill_color="black", back_color="white").convert('RGBA')

# 4. Intentar abrir y procesar el logo
if os.path.exists(logo_path):
    logo = Image.open(logo_path).convert("RGBA")
    
    # Calcular tamaño ideal del logo (máximo un 25% del tamaño total del QR para no tapar los datos)
    basewidth = int(float(img_qr.size[0]) * 0.25)
    wpercent = (basewidth / float(logo.size[0]))
    hsize = int((float(logo.size[1]) * float(wpercent)))
    
    # Redimensionar el logo con alta calidad
    logo = logo.resize((basewidth, hsize), Image.Resampling.LANCZOS)
    
    # 5. Calcular la posición para pegarlo exactamente en el centro
    pos = (
        (img_qr.size[0] - logo.size[0]) // 2,
        (img_qr.size[1] - logo.size[1]) // 2
    )
    
    # Pegar el logo respetando las transparencias
    img_qr.paste(logo, pos, logo)
    print("✨ Logo incrustado en el centro con éxito.")
else:
    print("⚠️ No se encontró la imagen del logo en la ruta especificada. Se generó sin logo.")

# 6. Guardar el resultado en un archivo
img_qr.save(output_path)
print(f"✅ ¡Terminado! Tu archivo se ha guardado como '{output_path}'")
