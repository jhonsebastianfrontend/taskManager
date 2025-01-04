const taskDb = [
    {
        id: '1',
        name: 'Planificar reunión de equipo',
        description: 'Coordinar fecha y detalles para la reunión semanal del equipo de desarrollo.',
        state: 'pending',
        completedAt: '2025-01-15'
    },
    {
        id: '2',
        name: 'Desarrollar funcionalidad de login',
        description: 'Implementar el sistema de autenticación para usuarios en la plataforma.',
        state: 'completed',
        completedAt: '2025-01-10'
    },
    {
        id: '3',
        name: 'Revisión de código',
        description: 'Revisar el código de la funcionalidad de carga de imágenes y realizar correcciones.',
        state: 'in-progress',
        completedAt: '2025-01-10'
    },
    {
        id: '4',
        name: 'Actualizar documentación del proyecto',
        description: 'Actualizar la documentación interna con los cambios recientes en la arquitectura del sistema.',
        state: 'pending',
        completedAt: '2025-01-10'
    },
    {
        id: '5',
        name: 'Configurar servidores de producción',
        description: 'Realizar la configuración y pruebas en los servidores de producción para el despliegue.',
        state: 'completed',
        completedAt: '2025-01-05'
    },
    {
        id: '6',
        name: 'Solucionar errores de seguridad',
        description: 'Corregir vulnerabilidades de seguridad detectadas en la aplicación web.',
        state: 'in-progress',
        completedAt: '2025-01-10'
    },
    {
        id: '7',
        name: 'Desarrollar nueva interfaz de usuario',
        description: 'Rediseñar la página de inicio y la interfaz de usuario para mejorar la experiencia del usuario.',
        state: 'completed',
        completedAt: '2025-01-08'
    },
    {
        id: '8',
        name: 'Optimización de consultas de base de datos',
        description: 'Revisar y optimizar las consultas SQL para mejorar el rendimiento de la aplicación.',
        state: 'pending',
        completedAt: '2025-01-10'
    },
    {
        id: '9',
        name: 'Revisar acceso a API externa',
        description: 'Verificar que la integración con la API externa esté funcionando correctamente y corregir errores.',
        state: 'in-progress',
        completedAt: '2025-01-10'
    },
    {
        id: '10',
        name: 'Pruebas de rendimiento del sistema',
        description: 'Realizar pruebas de estrés para asegurar que el sistema pueda manejar la carga esperada.',
        state: 'completed',
        completedAt: '2025-01-12'
    },
    {
        id: '11',
        name: 'Refactorizar código del módulo de pagos',
        description: 'Refactorizar el código del módulo de pagos para mejorar la legibilidad y el mantenimiento.',
        state: 'pending',
        completedAt: '2025-01-10'
    },
    {
        id: '12',
        name: 'Revisión de logs de servidor',
        description: 'Revisar los logs del servidor para detectar posibles problemas y mejorar el monitoreo del sistema.',
        state: 'in-progress',
        completedAt: '2025-01-10'
    },
    {
        id: '13',
        name: 'Implementación de la funcionalidad de búsqueda',
        description: 'Desarrollar e integrar la nueva funcionalidad de búsqueda avanzada en la plataforma.',
        state: 'completed',
        completedAt: '2025-01-03'
    },
    {
        id: '14',
        name: 'Crear pruebas unitarias',
        description: 'Desarrollar pruebas unitarias para los nuevos métodos de la capa de servicios.',
        state: 'completed',
        completedAt: '2025-01-04'
    },
    {
        id: '15',
        name: 'Reunión de planificación de sprint',
        description: 'Realizar la reunión de planificación para el próximo sprint de desarrollo.',
        state: 'pending',
        completedAt: '2025-01-10'
    },
    {
        id: '16',
        name: 'Configurar integración continua',
        description: 'Configurar el servidor de integración continua para automatizar pruebas y despliegues.',
        state: 'in-progress',
        completedAt: '2025-01-10'
    },
    {
        id: '17',
        name: 'Actualizar versión de dependencias',
        description: 'Actualizar las dependencias del proyecto a las últimas versiones estables.',
        state: 'completed',
        completedAt: '2025-01-11'
    },
    {
        id: '18',
        name: 'Desarrollar funcionalidad de chat en vivo',
        description: 'Implementar el sistema de chat en vivo para soporte al cliente.',
        state: 'pending',
        completedAt: '2025-01-10'
    },
    {
        id: '19',
        name: 'Revisión de diseño móvil',
        description: 'Verificar que la plataforma sea completamente funcional en dispositivos móviles.',
        state: 'completed',
        completedAt: '2025-01-14'
    },
    {
        id: '20',
        name: 'Auditoría de seguridad',
        description: 'Realizar una auditoría de seguridad de la aplicación para detectar posibles vulnerabilidades.',
        state: 'in-progress',
        completedAt: '2025-01-10'
    }
];

module.exports = {
    taskDb
};