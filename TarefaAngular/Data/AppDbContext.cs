using Microsoft.EntityFrameworkCore;

namespace TarefaAngular.Data
{
    public class AppDbContext:DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }
        public DbSet<Tarefa> Tarefas { get; set; }
        public DbSet<TarefaTipo> TarefaTipos { get; set; }
        public DbSet<Status>  Statuses{ get; set; }
        }
}
