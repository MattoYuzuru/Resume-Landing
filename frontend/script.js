// инит
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initLanguage();
    initReadingProgress();
    initProjectsFilter();
    initContactForm();
    initSmoothScroll();
});

// переводы
const translations = {
    ru: {
        'header.name': 'Матвей Рябушкин',
        'header.role': 'Backend / Frontend Developer',
        'nav.home': 'Главная',
        'nav.skills': 'Навыки',
        'nav.projects': 'Проекты',
        'nav.experience': 'Опыт',
        'nav.contacts': 'Контакты',
        'nav.contact': 'Связаться',
        'hero.title': 'Создаю современные веб-приложения',
        'hero.description': 'Студент и backend-разработчик. Интересуюсь архитектурой сервисов, базами данных и развиваюсь в написании чистого, понятного кода.',
        'hero.discuss': 'Написать мне',
        'hero.viewWorks': 'Посмотреть работы',
        'skills.title': 'Технические навыки',
        'skills.subtitle': 'Опыт работы с современным стеком технологий для разработки высоконагруженных приложений',
        'projects.title': 'Проекты',
        'projects.searchPlaceholder': 'Поиск по названию или описанию...',
        'projects.filterBy': 'Фильтр:',
        'projects.all': 'Все',
        'projects.sortBy': 'Сортировка:',
        'projects.sortDefault': 'По умолчанию',
        'projects.sortNameAsc': 'По названию (А-Я)',
        'projects.sortNameDesc': 'По названию (Я-А)',
        'projects.noResults': 'Проекты не найдены. Попробуйте изменить критерии поиска.',
        'experience.title': 'Опыт',
        'contacts.title': 'Контакты',
        'contacts.name': 'Имя',
        'contacts.namePlaceholder': 'Ваше имя',
        'contacts.email': 'Email',
        'contacts.message': 'Сообщение',
        'contacts.messagePlaceholder': 'Если есть стажировка или интересный проект — пишите, буду рад стать частью команды',
        'contacts.submit': 'Отправить сообщение',
        'contacts.sending': 'Отправляем...',
        'contacts.directContact': 'Прямая связь',
        'contacts.note': 'Буду рад откликнуться на стажировки или предложения для начинающих разработчиков. Стараюсь отвечать быстро.',
        'contacts.errorName': 'Пожалуйста, введите имя (минимум 2 символа)',
        'contacts.errorEmail': 'Пожалуйста, введите корректный email',
        'contacts.errorMessage': 'Пожалуйста, введите сообщение (минимум 10 символов)',
        'contacts.success': 'Сообщение успешно отправлено! Спасибо за обращение.',
        'contacts.error': 'Ошибка отправки. Попробуйте еще раз.',
        'contacts.errorNetwork': 'Ошибка сети. Проверьте подключение и попробуйте снова.'
    },
    en: {
        'header.name': 'Matvei Riabushkin',
        'header.role': 'Backend / Frontend Developer',
        'nav.home': 'Home',
        'nav.skills': 'Skills',
        'nav.projects': 'Projects',
        'nav.experience': 'Experience',
        'nav.contacts': 'Contacts',
        'nav.contact': 'Contact',
        'hero.title': 'Building Modern Web Applications',
        'hero.description': 'Student and backend developer. Interested in service architecture, databases, and developing clean, understandable code.',
        'hero.discuss': 'Mail me',
        'hero.viewWorks': 'View Works',
        'skills.title': 'Technical Skills',
        'skills.subtitle': 'Experience with modern technology stack for developing high-load applications',
        'projects.title': 'Projects',
        'projects.searchPlaceholder': 'Search by title or description...',
        'projects.filterBy': 'Filter:',
        'projects.all': 'All',
        'projects.sortBy': 'Sort by:',
        'projects.sortDefault': 'Default',
        'projects.sortNameAsc': 'By name (A-Z)',
        'projects.sortNameDesc': 'By name (Z-A)',
        'projects.noResults': 'No projects found. Try changing your search criteria.',
        'experience.title': 'Experience',
        'contacts.title': 'Contacts',
        'contacts.name': 'Name',
        'contacts.namePlaceholder': 'Your name',
        'contacts.email': 'Email',
        'contacts.message': 'Message',
        'contacts.messagePlaceholder': 'If you have an internship or an interesting project - write, I will be glad to be part of the team',
        'contacts.submit': 'Send Message',
        'contacts.sending': 'Sending...',
        'contacts.directContact': 'Direct Contact',
        'contacts.note': 'I will be glad to respond to internships or offers for junior developers. I try to answer quickly.',
        'contacts.errorName': 'Please enter a name (minimum 2 characters)',
        'contacts.errorEmail': 'Please enter a valid email',
        'contacts.errorMessage': 'Please enter a message (minimum 10 characters)',
        'contacts.success': 'Message sent successfully! Thank you for contacting me.',
        'contacts.error': 'Sending error. Please try again.',
        'contacts.errorNetwork': 'Network error. Check your connection and try again.'
    }
};

// темы
function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('theme') || 'light';

    // Применяем тему
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeButton(savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeButton(newTheme);
    });
}

function updateThemeButton(theme) {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('.theme-icon');

    themeIcon.textContent = theme === 'light' ? '🌙' : '☀️';
    themeToggle.setAttribute('aria-pressed', theme === 'dark');
}

// язык
function initLanguage() {
    const langToggle = document.getElementById('langToggle');
    const savedLang = localStorage.getItem('language') || 'ru';

    // Применяем язык
    setLanguage(savedLang);

    langToggle.addEventListener('click', () => {
        const currentLang = document.documentElement.getAttribute('lang') || 'ru';
        const newLang = currentLang === 'ru' ? 'en' : 'ru';

        setLanguage(newLang);
        localStorage.setItem('language', newLang);
    });
}

function setLanguage(lang) {
    document.documentElement.setAttribute('lang', lang);

    const langToggle = document.getElementById('langToggle');
    const langText = langToggle.querySelector('.lang-text');
    langText.textContent = lang === 'ru' ? 'EN' : 'RU';

    // Обновляем все элементы data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Обновляем placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
}

// прогресс
function initReadingProgress() {
    const progressBar = document.querySelector('.reading-progress');

    window.addEventListener('scroll', () => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        const scrolled = window.scrollY;
        const progress = (scrolled / documentHeight) * 100;

        progressBar.style.width = `${Math.min(progress, 100)}%`;
        progressBar.setAttribute('aria-valuenow', Math.round(progress));
    });
}

// проекты
let projectsData = [];

function initProjectsFilter() {
    const projectsContainer = document.getElementById('projectsContainer');
    const searchInput = document.getElementById('projectSearch');
    const sortSelect = document.getElementById('projectSort');
    const filterTags = document.querySelectorAll('.projects__tag');
    const viewButtons = document.querySelectorAll('.projects__view-btn');
    const emptyState = document.getElementById('emptyState');

    // Сохраняем данные проектов
    projectsData = Array.from(projectsContainer.querySelectorAll('.projects__card')).map(card => ({
        element: card,
        name: card.getAttribute('data-name') || '',
        tags: card.getAttribute('data-tags') || '',
        description: card.querySelector('.projects__description')?.textContent || ''
    }));

    let activeFilters = new Set(['all']);
    let currentView = 'grid';

    // Поиск
    searchInput.addEventListener('input', debounce(filterProjects, 300));

    // Фильтры
    filterTags.forEach(tag => {
        tag.addEventListener('click', () => {
            const tagValue = tag.getAttribute('data-tag');

            if (tagValue === 'all') {
                activeFilters = new Set(['all']);
                filterTags.forEach(t => t.classList.remove('projects__tag--active'));
                tag.classList.add('projects__tag--active');
            } else {
                activeFilters.delete('all');
                document.querySelector('[data-tag="all"]').classList.remove('projects__tag--active');

                if (activeFilters.has(tagValue)) {
                    activeFilters.delete(tagValue);
                    tag.classList.remove('projects__tag--active');
                } else {
                    activeFilters.add(tagValue);
                    tag.classList.add('projects__tag--active');
                }

                if (activeFilters.size === 0) {
                    activeFilters.add('all');
                    document.querySelector('[data-tag="all"]').classList.add('projects__tag--active');
                }
            }

            filterProjects();
        });
    });

    // Сортировка
    sortSelect.addEventListener('change', filterProjects);

    // Смена вида
    viewButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            currentView = btn.getAttribute('data-view');

            viewButtons.forEach(b => {
                b.classList.remove('projects__view-btn--active');
                b.setAttribute('aria-pressed', 'false');
            });

            btn.classList.add('projects__view-btn--active');
            btn.setAttribute('aria-pressed', 'true');

            if (currentView === 'list') {
                projectsContainer.classList.add('projects__grid--list');
            } else {
                projectsContainer.classList.remove('projects__grid--list');
            }
        });
    });

    function filterProjects() {
        const searchTerm = searchInput.value.toLowerCase();
        const sortValue = sortSelect.value;

        // Фильтрация
        let filteredProjects = projectsData.filter(project => {
            const matchesSearch =
                project.name.toLowerCase().includes(searchTerm) ||
                project.description.toLowerCase().includes(searchTerm);

            const matchesFilter =
                activeFilters.has('all') ||
                Array.from(activeFilters).some(filter =>
                    project.tags.split(',').includes(filter)
                );

            return matchesSearch && matchesFilter;
        });

        // Сортировка
        if (sortValue === 'name-asc') {
            filteredProjects.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortValue === 'name-desc') {
            filteredProjects.sort((a, b) => b.name.localeCompare(a.name));
        }

        // Отображение
        projectsData.forEach(project => {
            project.element.classList.add('projects__card--hidden');
        });

        filteredProjects.forEach(project => {
            project.element.classList.remove('projects__card--hidden');
        });

        // Пустое состояние
        if (filteredProjects.length === 0) {
            emptyState.style.display = 'block';
            projectsContainer.style.display = 'none';
        } else {
            emptyState.style.display = 'none';
            projectsContainer.style.display = 'grid';
        }
    }
}

// форма контактов
function initContactForm() {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const formStatus = document.getElementById('formStatus');

    // Валидация в реальном времени
    nameInput.addEventListener('blur', () => validateField(nameInput, validateName));
    emailInput.addEventListener('blur', () => validateField(emailInput, validateEmail));
    messageInput.addEventListener('blur', () => validateField(messageInput, validateMessage));

    // Очистка ошибок при вводе
    nameInput.addEventListener('input', () => clearError(nameInput));
    emailInput.addEventListener('input', () => clearError(emailInput));
    messageInput.addEventListener('input', () => clearError(messageInput));

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Валидация всех полей
        const isNameValid = validateField(nameInput, validateName);
        const isEmailValid = validateField(emailInput, validateEmail);
        const isMessageValid = validateField(messageInput, validateMessage);

        if (!isNameValid || !isEmailValid || !isMessageValid) {
            // Фокус на первом невалидном поле
            const firstInvalid = form.querySelector('.error');
            if (firstInvalid) {
                firstInvalid.focus();
            }
            return;
        }

        // Получаем текущий язык
        const currentLang = document.documentElement.getAttribute('lang') || 'ru';

        // Подготовка к отправке
        const submitButton = form.querySelector('.contacts__submit');
        const originalText = submitButton.textContent;
        submitButton.disabled = true;
        submitButton.textContent = translations[currentLang]['contacts.sending'];

        // Подготовка данных для отправки
        const formData = {
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            message: messageInput.value.trim()
        };

        try {
            // Отправка на бэкенд
            const response = await fetch('/api/send-mail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                // Успешная отправка
                showStatus('success', translations[currentLang]['contacts.success']);
                form.reset();

                // Очищаем все ошибки
                clearError(nameInput);
                clearError(emailInput);
                clearError(messageInput);
            } else {
                // Ошибка от сервера
                const error = await response.json();
                const errorMessage = error.detail || translations[currentLang]['contacts.error'];
                showStatus('error', errorMessage);

                console.error('Server error:', error);
            }
        } catch (error) {
            // Ошибка сети
            showStatus('error', translations[currentLang]['contacts.errorNetwork']);
            console.error('Network error:', error);
        } finally {
            // Восстанавливаем кнопку
            submitButton.disabled = false;
            submitButton.textContent = originalText;
        }
    });

    function validateName(value) {
        return value.trim().length >= 2;
    }

    function validateEmail(value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value.trim());
    }

    function validateMessage(value) {
        return value.trim().length >= 10;
    }

    function validateField(input, validator) {
        const value = input.value;
        const errorElement = document.getElementById(`${input.id}Error`);
        const lang = document.documentElement.getAttribute('lang') || 'ru';

        if (!validator(value)) {
            input.classList.add('error');
            input.setAttribute('aria-invalid', 'true');
            errorElement.textContent = translations[lang][`contacts.error${input.id.charAt(0).toUpperCase() + input.id.slice(1)}`];
            return false;
        }

        input.classList.remove('error');
        input.setAttribute('aria-invalid', 'false');
        errorElement.textContent = '';
        return true;
    }

    function clearError(input) {
        input.classList.remove('error');
        input.setAttribute('aria-invalid', 'false');
        const errorElement = document.getElementById(`${input.id}Error`);
        if (errorElement) {
            errorElement.textContent = '';
        }
    }

    function showStatus(type, message) {
        formStatus.className = 'contacts__status';
        formStatus.classList.add(`contacts__status--${type}`);
        formStatus.textContent = message;

        // Автоскрытие через 5 секунд
        setTimeout(() => {
            formStatus.className = 'contacts__status';
        }, 5000);
    }
}

// плавный прогресс бар
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            if (href === '#') return;

            e.preventDefault();

            const target = document.querySelector(href);
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// утилки
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}